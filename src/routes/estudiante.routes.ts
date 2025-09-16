import { Router } from "express";
import { EstudianteController } from "../controllers/estudiante.controller";
import { InMemoryEstudianteRepository } from "../repositories/inmemory.estudiante.repository";
import { EstudianteService } from "../services/estudiante.service";
import { checkJwt, checkScopes } from "../middleware/check.auth.middlware";

const router = Router();

const repo = new InMemoryEstudianteRepository();
const estudianteService = new EstudianteService(repo);
const estudianteController = new EstudianteController(estudianteService);

router.get(
  "/",
  checkJwt,
  checkScopes(["read:estudiantes"]),
  estudianteController.getAllEstudiantesCtrl
);

router.post(
  "/",
  checkJwt,
  checkScopes(["write:estudiantes"]),
  estudianteController.createEstudianteCtrl
);

router.get(
  "/:id",
  checkJwt,
  checkScopes(["read:estudiantes"]),
  estudianteController.getEstudianteByIdCtrl
);

router.delete(
  "/:id",
  checkJwt,
  checkScopes(["write:estudiantes"]),
  estudianteController.deleteEstudianteCtrl
);

router.put(
  "/:id",
  checkJwt,
  checkScopes(["write:estudiantes"]),
  estudianteController.updateEstudianteCtrl
);

export default router;
