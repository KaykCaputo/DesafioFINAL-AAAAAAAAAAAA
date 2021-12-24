import express from "express";
import livrosController from "../controllers/livros.controller.js";

const router = express.Router();

router.post("/", livrosController.createLivro);
router.get("/", livrosController.getLivro);
router.delete("/:id", livrosController.deleteLivro);
router.put("/", livrosController.updateLivro);
router.get("/:id", livrosController.getLivroId);
router.get("/:autor_id", livrosController.getLivroByAutor);

export default router;