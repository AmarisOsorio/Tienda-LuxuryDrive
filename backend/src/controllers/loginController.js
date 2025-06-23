import ClientsModel from "../models/Clients.js"
import EmployeesModel from "../models/Employees.js"
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken"; // Corregido el nombre del import
import { config } from "../config.js";

const loginController = {};

loginController.login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        let userFound; // variable para que encontremos un usuario
        let userType; // variable que nos dice su tipo de usuario

        /* 1. Admin */
        if (email === config.emailAdmin.email && password === config.emailAdmin.password) {
            userType = "Admin";
            userFound = { _id: "Admin", email: config.emailAdmin.email };
        } else {
            /* 2. Empleados */
            userFound = await EmployeesModel.findOne({ email });
            if (userFound) {
                userType = "Employee";
            } else {
                /* 3. Clientes */
                userFound = await ClientsModel.findOne({ email });
                if (userFound) {
                    userType = "Client"; // Corregido de "Clients" a "Client"
                }
            }
        }

        /* Si no encontramos un usuario */
        if (!userFound) {
            return res.status(404).json({ message: "User not found" });
        }

        /* Verificar contraseña para usuarios no-admin */
        if (userType !== "Admin") {
            const isMatch = await bcrypt.compare(password, userFound.password); // Agregado await
            if (!isMatch) {
                return res.status(401).json({ message: "Invalid password" });
            }
        }

        /* Generar JWT token */
        jsonwebtoken.sign(
            { id: userFound._id, userType },
            config.JWT.secret,
            { expiresIn: config.JWT.expiresIn },
            (error, token) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: "Error generating token" });
                }

                // Establecer cookie
                res.cookie("authToken", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 24 * 60 * 60 * 1000 // 24 horas
                });

                // Respuesta exitosa con datos del usuario (sin contraseña)
                const userData = {
                    id: userFound._id,
                    email: userFound.email,
                    name: userFound.name,
                    userType
                };

                res.status(200).json({
                    message: "Login successful!",
                    token,
                    user: userData,
                    client: userType === "Client" ? userData : null // Para compatibilidad con el frontend
                });
            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error during login" });
    }
};

export default loginController;