import { Estudiante } from "../entities/estudiante.entities";
import { IEstudianteRepository } from "../repositories/estudiante.respository";
//import { InMemoryEstudianteRepository } from "../repositories/inmemory.estudiante.repository";

export class EstudianteService {
  constructor(private estudiantesRepo: IEstudianteRepository) {
    this.estudiantesRepo = estudiantesRepo;
  }

  async getAllEstudiantes(): Promise<Estudiante[]> {
    return this.estudiantesRepo.getAll();
  }
}
