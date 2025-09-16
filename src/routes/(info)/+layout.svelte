<script lang="ts">
  import Header from '$lib/components/header/Header.svelte'

  const { children } = $props()
</script>

<Header name="UQbar"/>
<main>
  {@render children()}
</main>
