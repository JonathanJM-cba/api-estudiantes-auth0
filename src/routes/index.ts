import { Router } from "express";
import estudianteRouter from "./estudiante.routes";

const router = Router();

router.use("/estudiantes", estudianteRouter);

export default router;
