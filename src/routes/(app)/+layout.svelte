<script lang="ts">
  import Header from '$lib/components/header/Header.svelte'
  import './app.css'

  const { children } = $props()
</script>

<Header />
<main>
  {@render children()}
</main>
