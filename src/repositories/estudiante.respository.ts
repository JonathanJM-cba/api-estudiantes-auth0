import { Estudiante } from "../entities/estudiante.entities";

export interface IEstudianteRepository {
  getAll(): Promise<Estudiante[]>;

  getById(id: number): Promise<Estudiante | null>;

  create(estudiante: Estudiante): Promise<Estudiante>;

  update(id: number, estudiante: Partial<Estudiante>): void;

  delete(id: number): void;
}
