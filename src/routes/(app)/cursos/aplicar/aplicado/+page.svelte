<script>
  import { page } from '$app/state'

  const cursoId = page.url.searchParams.get('curso') ?? ''
  const nombre = page.url.searchParams.get('nombre') ?? ''
  const email = page.url.searchParams.get('email') ?? ''
</script>

<h2>Genial {nombre}!</h2>
<p class="success-message">Has aplicado {cursoId ? `al curso ${cursoId}` : ''} con éxito!</p>
<p>Te contactaremos a la brevedad a tu email: <span class="email">{email}</span></p>

<style>
  h2 {
    color: #1273D4;
  }

  p {
    line-height: 1.5;
  }

  .success-message {
    font-weight: bold;
    color: green;
  }

  .email {
    font-weight: bold;
  }
</style>