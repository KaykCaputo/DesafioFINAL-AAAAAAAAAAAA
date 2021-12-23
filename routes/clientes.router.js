import express from "express";
import clientesController from "../controllers/clientes.controller.js";

const router = express.Router();

router.post("/", clientesController.createCliente);
router.get("/", clientesController.getCliente);
router.delete("/:id", clientesController.deleteCliente);
router.put("/", clientesController.updateCliente);
router.get("/:id", clientesController.getClienteId);

export default router;