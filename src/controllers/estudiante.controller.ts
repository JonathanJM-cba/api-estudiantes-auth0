import { EstudianteService } from "../services/estudiante.service";
import { Response } from "express";

export class EstudianteController {
  constructor(private estudianteService: EstudianteService) {
    this.estudianteService = estudianteService;
  }

  getAllEstudiantesCtrl = async (_: any, res: Response) => {
    try {
      const estudiantes = await this.estudianteService.getAllEstudiantes();
      res.status(200).json(estudiantes);
    } catch (error) {
      console.log("Error al obtener los estudiantes:", error);
      res
        .status(500)
        .json({ message: "Error al intentar obtener los estudiantes" });
    }
  };
}
