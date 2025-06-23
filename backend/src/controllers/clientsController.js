const clientsController = {};
import clientsModel from "../models/Clients.js";

/********************** S E L E C T **************************/

clientsController.getClient = async (req, res) => {
    try {
        const clients = await clientsModel.find().select('-password'); // Excluir contraseñas
        res.status(200).json(clients);
    } catch (error) {
        console.error('Error getting clients:', error);
        res.status(500).json({ message: "Error retrieving clients" });
    }
};

/********************** I N S E R T **************************/

clientsController.insertClient = async (req, res) => {
    try {
        const { name, address, email, password, telephone, dui, driversLicense, monthlyIncome } = req.body;
        
        // Verificar si el cliente ya existe
        const existingClient = await clientsModel.findOne({ email });
        if (existingClient) {
            return res.status(400).json({ message: "Client with this email already exists" });
        }

        const newClient = new clientsModel({ 
            name, 
            address, 
            email, 
            password, // Nota: Deberías encriptar la contraseña aquí también
            telephone, 
            dui, 
            driversLicense, 
            monthlyIncome 
        });
        
        await newClient.save();
        res.status(201).json({ message: "The client has been saved successfully" });
    } catch (error) {
        console.error('Error inserting client:', error);
        res.status(500).json({ message: "Error saving client" });
    }
};

/********************** D E L E T E **************************/

clientsController.deleteClient = async (req, res) => {
    try {
        const deletedClient = await clientsModel.findByIdAndDelete(req.params.id);
        if (!deletedClient) {
            return res.status(404).json({ message: "Client not found" });
        }
        res.status(200).json({ message: "The client has been deleted successfully" });
    } catch (error) {
        console.error('Error deleting client:', error);
        res.status(500).json({ message: "Error deleting client" });
    }
};

/********************** U P D A T E **************************/

clientsController.updateClient = async (req, res) => {
    try {
        const { name, address, email, telephone, dui, driversLicense, monthlyIncome } = req.body;
        
        const updatedClient = await clientsModel.findByIdAndUpdate(
            req.params.id, 
            { name, address, email, telephone, dui, driversLicense, monthlyIncome }, 
            { new: true, runValidators: true }
        ).select('-password'); // Excluir contraseña de la respuesta
        
        if (!updatedClient) {
            return res.status(404).json({ message: "Client not found" });
        }
        
        res.status(200).json({ 
            message: "The client has been updated successfully",
            client: updatedClient
        });
    } catch (error) {
        console.error('Error updating client:', error);
        res.status(500).json({ message: "Error updating client" });
    }
};

export default clientsController;