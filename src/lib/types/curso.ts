export type Curso = {
  id: number;
  titulo: string;
  descripcion: string;
  lecciones: number;
  nivel: Nivel;
  duracionEnMinutos: number;
};

export enum Nivel {
  Principiante = 'Principiante',
  Intermedio = 'Intermedio',
  Avanzado = 'Avanzado'
}