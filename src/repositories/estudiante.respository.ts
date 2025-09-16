import { Estudiante } from "../entities/estudiante.entities";

export interface IEstudianteRepository {
  getAll(): Promise<Estudiante[]>;

  getById(id: string): Promise<Estudiante | null>;

  create(estudiante: Estudiante): Promise<Estudiante>;

  update(id: string, estudiante: Partial<Estudiante>): void;

  delete(id: string): void;
}
