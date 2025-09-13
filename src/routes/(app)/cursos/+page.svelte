<script lang="ts">
  import { CURSOS_MOCK } from '$lib/data/mocks/cursos'
</script>

<ul>
  {#each CURSOS_MOCK as curso (curso.id)}
    <li>
      <a href={`/cursos/${curso.id}`}>{curso.titulo}</a>
    </li>
  {/each}
  <li><a href="/cursos/9999">Un curso que no existe</a></li>
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: #1273D4;
  }

  a:hover {
    text-decoration: underline;
  }
</style>