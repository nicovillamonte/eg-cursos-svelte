<script lang="ts">
  import CursoCard from '$lib/components/courseCard/CursoCard.svelte'
  import { CURSOS_MOCK } from '$lib/data/mocks/cursos'
</script>

<section class="container">
  <ul>
    {#each CURSOS_MOCK as curso (curso.id)}
      <li>
        <CursoCard {curso} />
      </li>
    {/each}
    <li><a href="/cursos/9999">Un curso que no existe</a></li>
  </ul>
</section>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;
    padding: 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1rem;

    max-width: 90%;
    margin: 0 auto;
    justify-items: stretch;
  }

  li {
    min-width: max(40%, 20rem);
  }

  a {
    text-decoration: none;
    color: #1273D4;
  }

  a:hover {
    text-decoration: underline;
  }
</style>