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
      const dataEstudiante: Estudiante = new Estudiante(
        id,
        nombre,
        apellido,
        edad
      );
      const newEstudiante: Estudiante =
        await this.estudianteService.createEstudiante(dataEstudiante);
      res.status(201).json({
        message: "Estudiante creado exitosamente",
        newEstudiante,
      });
    } catch (error) {
      console.log("Error al crear el estudiante:", error);
      res
        .status(500)
        .json({ message: "Error al intentar crear el estudiante" });
    }
  };

  getEstudianteByIdCtrl = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const estudiante: Estudiante | null =
        await this.estudianteService.getEstudianteById(id);

      if (!estudiante) {
        return res.status(404).json({
          message: "Estudiante no encontrado",
        });
      }

      res.status(200).json(estudiante);
    } catch (error) {
      console.log("Error al obtener el estudiante por ID:", error);
      res
        .status(500)
        .json({ message: "Error al intentar obtener el estudiante por ID" });
    }
  };

  deleteEstudianteCtrl = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const estudiante = await this.estudianteService.getEstudianteById(id);
      if (!estudiante) {
        return res.status(404).json({ message: "Estudiante no encontrado" });
      }

      this.estudianteService.deleteEstudiante(id);

      res.status(200).json({ message: "Estudiante eliminado exitosamente" });
    } catch (error) {
      console.log("Error al eliminar el estudiante:", error);
      res
        .status(500)
        .json({ message: "Error al intentar eliminar el estudiante" });
    }
  };

  updateEstudianteCtrl = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, apellido, edad } = req.body;
    try {
      const estudiante: Estudiante | null =
        await this.estudianteService.getEstudianteById(id);
      if (!estudiante)
        return res.status(404).json({ message: "Estudiante no encontrado" });

      estudiante.nombre = nombre || estudiante.nombre;
      estudiante.apellido = apellido || estudiante.apellido;
      estudiante.edad = edad || estudiante.edad;

      this.estudianteService.updateEstudiante(id, estudiante);

      res.status(200).json({ message: "Estudiante actualizado exitosamente" });
    } catch (error) {
      console.log("Error al actualizar el estudiante:", error);
      res
        .status(500)
        .json({ message: "Error al intentar actualizar el estudiante" });
    }
  };
}
