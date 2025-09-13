<script lang="ts">
  import { page } from '$app/state'
  import { genericErrorImage } from '$lib/assets/'
</script>

<h1>Error Controlado: {page.status}</h1>
<p>{page.error?.message ?? 'Error desconocido'}</p>
<img src={genericErrorImage} alt="Imagen de error" />

<style>
  p {
    color: red;
  }

  img {
    max-width: 300px;
    margin-top: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>