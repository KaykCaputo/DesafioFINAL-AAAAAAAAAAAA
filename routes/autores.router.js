import express from "express";
import autoresController from "../controllers/autores.controller.js";

const router = express.Router();

router.post("/", autoresController.createAutor);
router.get("/", autoresController.getAutor);
router.delete("/:id", autoresController.deleteAutor);
router.put("/", autoresController.updateAutor);
router.get("/:id", autoresController.getAutorId);

export default router;