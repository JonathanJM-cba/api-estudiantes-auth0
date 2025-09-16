import { Router } from "express";
import { EstudianteController } from "../controllers/estudiante.controller";
import { InMemoryEstudianteRepository } from "../repositories/inmemory.estudiante.repository";
import { EstudianteService } from "../services/estudiante.service";

const router = Router();

const repo = new InMemoryEstudianteRepository();
const estudianteService = new EstudianteService(repo);
const estudianteController = new EstudianteController(estudianteService);

router.get("/", estudianteController.getAllEstudiantesCtrl);

router.post("/", estudianteController.createEstudianteCtrl);

router.get("/:id", estudianteController.getEstudianteByIdCtrl);

router.delete("/:id", estudianteController.deleteEstudianteCtrl);

export default router;
