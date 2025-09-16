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

  async createEstudiante(estudiante: Estudiante): Promise<Estudiante> {
    return this.estudiantesRepo.create(estudiante);
  }

  async getEstudianteById(id: string): Promise<Estudiante | null> {
    return this.estudiantesRepo.getById(id);
  }

  deleteEstudiante(id: string): void {
    this.estudiantesRepo.delete(id);
  }

  updateEstudiante(id: string, estudiante: Partial<Estudiante>): void {
    this.estudiantesRepo.update(id, estudiante);
  }
}
