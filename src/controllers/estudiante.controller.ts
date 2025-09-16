import { EstudianteService } from "../services/estudiante.service";
import { Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";
import { Estudiante } from "../entities/estudiante.entities";

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

  createEstudianteCtrl = async (req: Request, res: Response) => {
    const { nombre, apellido, edad } = req.body;
    try {
      const id = uuidv4();
      const dataEstudainte: Estudiante = new Estudiante(
        id,
        nombre,
        apellido,
        edad
      );
      const newEstudiante = await this.estudianteService.createEstudiante(
        dataEstudainte
      );
      res.status(201).json({
        message: "Estudiante creado exitosamente",
        estudiante: {
          nombre,
          apellido,
          edad,
        },
      });
    } catch (error) {
      console.log("Error al crear el estudiante:", error);
      res
        .status(500)
        .json({ message: "Error al intentar crear el estudiante" });
    }
  };
}
