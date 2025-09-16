import { Estudiante } from "../entities/estudiante.entities";
import { IEstudianteRepository } from "./estudiante.respository";

export class InMemoryEstudianteRepository implements IEstudianteRepository {
  private readonly estudiantes: Estudiante[] = [];

  async getAll(): Promise<Estudiante[]> {
    return this.estudiantes;
  }

  async getById(id: number): Promise<Estudiante | null> {
    const estudiante = this.estudiantes.find((e) => e.id === id);
    return estudiante || null;
  }

  async create(estudiante: Estudiante): Promise<Estudiante> {
    this.estudiantes.push(estudiante);
    return estudiante;
  }

  update(id: number, estudiante: Partial<Estudiante>): void {
    const index = this.estudiantes.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.estudiantes[index] = { ...this.estudiantes[index], ...estudiante };
    }
  }

  delete(id: number): void {
    const index = this.estudiantes.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.estudiantes.splice(index, 1);
    }
  }
}
