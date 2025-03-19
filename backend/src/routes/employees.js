import express from "express";
import EmployeessController from "../Controlador/EmpleadosController.js";

const router = express.Router();

router.route("/").get(EmployeessController.getEmployees)
.post(EmployeessController.insertEmployees)

router.route("/:id")
.put(EmployeessController.updateEmployees)
.delete(EmployeessController.deleteEmployees);

export default router;