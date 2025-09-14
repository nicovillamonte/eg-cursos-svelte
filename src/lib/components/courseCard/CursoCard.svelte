<script lang="ts">
  import type { Curso } from '$lib/types'

  interface Props {
    curso: Curso
  }

  const { curso }: Props = $props()

  const minutosAHoras = (minutos: number): string => {
    const horas = Math.floor(minutos / 60)
    const mins = minutos % 60
    return `${horas}h ${mins != 0 ? mins + 'm' : ''}`
  }
</script>


<article class="course-card">
  <header>
    <h2>{curso.titulo}</h2>
    <p>{curso.descripcion}</p>
  </header>
  <main>
    <p><span class="feat-title">Nivel:</span> {curso.nivel}</p>
    <p><span class="feat-title">Duración:</span> {minutosAHoras(curso.duracionEnMinutos)}</p>
    <p><span class="feat-title">Lecciones:</span> {curso.lecciones}</p>
  </main>
  <footer>
    <a href={`/cursos/${curso.id}`}>Ver curso</a>
  </footer>
</article>


<style>
  .course-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .course-card:hover {
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
  }

  header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  header p {
    color: #666;
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  main p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #555;
  }

  footer {
    margin-top: 1rem;
    text-align: right;
  }

  footer a {
    text-decoration: none;
    color: #1273D4;
    font-weight: bold;
  }

  footer a:hover {
    color: #0a58ca;
  }

  .feat-title {
    font-weight: bold;
    color: #333;
  }
</style>
