import express from "express";
import stockController from "../controllers/stockCOntroller.js";

const router = express.Router();

router.route("/")
.get(stockController.getStock)
.post(stockController.insertStock);

router.route("/:id")
.put(stockController.updateStock)
.delete(stockController.deleteStock);

export default router;