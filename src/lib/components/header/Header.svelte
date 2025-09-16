<script lang="ts">
  import './Header.css'
  import { page } from '$app/state'
  import BookIcon from 'phosphor-svelte/lib/Books'

  const routes = [
    { path: '/', title: 'Inicio' },
    { path: '/cursos', title: 'Cursos' },
    { path: '/sobre-nosotros', title: 'Sobre Nosotros' },
    { path: '/no-existe', title: 'Forzar 404', type: 'button' } // Ruta para forzar un error 404
  ]

  const { name = 'Cursos Online' } = $props()

  const isActive = (path: string) => {
    return path === '/'
      ? page.url.pathname === '/'
      : page.url.pathname === path || page.url.pathname.startsWith(`${path}/`)
  }
</script>

<header class="site-header">
  <div class="brand-container">
    <BookIcon class="icon" />
    <a href="/" class="brand">{name}</a>
  </div>

  <nav class="navigation">
    <ul>
      {#each routes as route, i (i)}
        <li>
          <a
            class:active={isActive(route.path)}
            class:button={route.type === 'button'}
            aria-current={page.url.pathname === route.path ? 'page' : undefined}
            href={route.path}>{route.title}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
</header>
