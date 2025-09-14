<script lang="ts">
  const { children } = $props()
</script>

<div>
  <h1>Listado de Cursos</h1>
  <p>(Renderizado en Layout de /cursos)</p>
</div>

{@render children()}

<style>
  div {
    display: flex;
    gap: 1rem;
    background-color: #f0f0f0;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;

    min-width: 340px;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0.5rem 0 0 0;
    color: #555;
  }
</style>