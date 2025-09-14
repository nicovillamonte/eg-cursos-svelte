<script lang="ts">
  const { children } = $props()
</script>

<div class="header-cursos">
  <div class="header-info">
    <h1>Listado de Cursos</h1>
    <p>(Renderizado en Layout de /cursos)</p>
  </div>
  <div>
    <a href="/cursos/aplicar">Aplicar a un curso</a>
  </div>
</div>

{@render children()}

<style>
  .header-cursos {
    display: flex;
    gap: 1rem;
    background-color: #f0f0f0;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;

    min-width: 340px;
  }

  .header-info {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
</style>