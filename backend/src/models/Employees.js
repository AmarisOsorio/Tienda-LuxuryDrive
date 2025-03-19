import {Schema, model} from "mongoose";

const EmployeesShema = new Schema({

    name: {
        type: String,
        require: true,
        maxLength: 100
    },
    phoneNumber: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    
    idRole: {
        type: Schema.Types.ObjectId,
        ref: "Rol",
        require : true
    },
    salaries: {
        type: Number,
        require: true,
        min : 0
    }
},{
    timestamps: true,
    strict: false
})


export default model("clients", ClientsShema)