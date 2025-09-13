<script lang="ts">
  import type { PageProps } from './$types'
  
  const { params, data: curso }: PageProps = $props()
</script>

<h1>Curso {params.id}: {curso?.titulo ?? ''}</h1>

<p>{curso.descripcion}</p>
<section>
  <p><span>Nivel:</span>{curso.nivel}</p>
  <p><span>Duración:</span>{curso.duracionEnMinutos} minutos</p>
  <p><span>Lecciones:</span>{curso.lecciones}</p>
</section>


<style>
  h1 {
    color: #1273D4;
  }

  p {
    line-height: 1.5;
  }

  span {
    font-weight: bold;
    margin-right: 0.2rem;
  }

  section {

    margin: 1rem 0 0 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
</style>