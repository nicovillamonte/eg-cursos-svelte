<script lang="ts">
  import './error.css'
  import { notFoundErrorImage, genericErrorImage } from '$lib/assets'
  import { page } from '$app/state'

  // Page contiene informacion sobre el error
  //  page.status -> codigo de error
  //  page.error -> objeto Error con el mensaje -> { message: string }
  //  page.url -> URL donde se produjo el error
</script>

<section class="error">
  <img
    src={page.status === 404 ? notFoundErrorImage : genericErrorImage}
    alt={`${page.status} error: ${page.error?.message ?? 'Algo salió mal.'}`}
  />

  <p class="error-info">
    <span class="status">{`Error ${page.status}:`}</span>
    <span>{page.error?.message ?? 'Algo salió mal.'}</span>
  </p>

  <a href="/">Ir al inicio</a>
</section>