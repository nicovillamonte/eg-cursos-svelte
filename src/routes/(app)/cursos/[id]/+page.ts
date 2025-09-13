import { CURSOS_MOCK } from '$lib/data/mocks/cursos'
import { error } from '@sveltejs/kit'

export function load({ params }: { params: { id: string } }) {
  if (isNaN(Number(params.id))) {
    throw error(400, 'El id del curso debe ser un número')
  }

  const curso = CURSOS_MOCK.find((curso) => curso.id === Number(params.id))
  if (!curso)
    throw error(404, `El curso con id ${params.id} no fue encontrado`)
  
  return curso
}