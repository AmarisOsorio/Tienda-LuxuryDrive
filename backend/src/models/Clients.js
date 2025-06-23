/*
   Campos: 
     name
     address
     email
     password
     telephone
     dui
     driversLicense
     monthlyIncome
     isVerified (agregado para verificación de email)
*/

import { Schema, model } from "mongoose";

const clientsSchema = new Schema({
    name: {
        type: String,
        required: true, // Corregido de "require" a "required"
        maxLength: 100,
        trim: true
    },
    address: {
        type: String,
        required: true,
        maxLength: 150,
        trim: true
    },
    email: {
        type: String,
        required: true,
        maxLength: 100,
        unique: true, // Asegurar que el email sea único
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
        minLength: 6 // Longitud mínima para contraseñas
    },
    telephone: {
        type: String,
        maxLength: 15, // Ajustado para números telefónicos más realistas
        trim: true
    },
    dui: {
        type: String,
        required: true,
        maxLength: 10,
        unique: true, // El DUI debe ser único
        trim: true
    },
    driversLicense: {
        type: String,
        required: false,
        maxLength: 15, // Ajustado para licencias más largas
        trim: true
    },
    monthlyIncome: {
        type: Number,
        required: true,
        min: 0
    },
    isVerified: {
        type: Boolean,
        default: false // Para verificación de email
    }
}, {
    timestamps: true,
    strict: true
});



export default model("Clients", clientsSchema);