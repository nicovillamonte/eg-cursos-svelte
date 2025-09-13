<script lang="ts">
  import showdown from 'showdown'
  
  // Get $lib/doc/SvelteRoutes.md content
  import doc from '$lib/doc/SvelteRoutes.md?raw'

  let converter = new showdown.Converter()

	const documentationAsHTML = converter.makeHtml(doc)

  let infoVisible = $state(false)
</script>


<h1>Bienvenidos Cursos Online</h1>

<button onclick={() => infoVisible = !infoVisible}>
  {infoVisible ? 'Ocultar' : 'Mostrar'} documentación sobre rutas en SvelteKit
</button>

{#if infoVisible}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html documentationAsHTML}
{/if}


<style>
  /* Este boton tiene que pasar desapercibido */
  button {
    background-color: transparent;
    border: none;
    color: #1273D4;
    text-decoration: underline;
    cursor: pointer;
    font-size: 1rem;
    margin: 1rem 0;
    padding: 0;
  }
</style>