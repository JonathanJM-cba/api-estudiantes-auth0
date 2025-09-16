export class Estudiante {
  id: string; //uuid
  nombre: string;
  apellido: string;
  edad: number;

  constructor(id: string, nombre: string, apellido: string, edad: number) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}
