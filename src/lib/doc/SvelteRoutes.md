# Rutas en SvelteKit

SvelteKit utiliza un sistema de enrutamiento basado en el sistema de archivos. Cada archivo y carpeta dentro del directorio `src/routes` corresponde a una ruta en la aplicación web. A continuación, se describen los conceptos clave para entender cómo funcionan las rutas en SvelteKit.

1. [Estructura de archivos y cómo mapean a URLs](#estructuradearchivosycmomapeanaurls)
2. [Archivo +page.svelte](#pagesvelte)
3. [Archivo +layout.svelte](#layoutsvelte)
4. [Archivo +error.svelte](#errorsvelte)
5. [Rutas dinámicas](#rutasdinmicas)
6. [**Groups** con paréntesis](#groupsconparntesis)


## Estructura de archivos y cómo mapean a URLs

Todo vive en `src/routes`. Cada **carpeta** es un segmento de la URL.
Un **archivo** `+page.svelte` dentro de una carpeta es la página para esa ruta.

  ```
  src/routes
      ├─ +page.svelte            → /
      ├─ about/
      │  └─ +page.svelte         → /about
      ├─ cursos/
      │  ├─ +page.svelte         → /cursos
      │  └─ [id]/
      │     └─ +page.svelte      → /cursos/123  (dinámica)
      └─ (marketing)/
        └─ landing/
            └─ +page.svelte      → /landing     (group: no cambia la URL)
  ```


## +page.svelte

Es el componente que se renderiza para una ruta.

Ejemplo, para desarrollar la pagina dentro de `/cursos` debemos hacerlo en `src/routes/cursos/+page.svelte`:

  ```
  src/routes
      └─ cursos/
        └─ +page.svelte         → /cursos
  ```


## +layout.svelte

Un layout envuelve a sus páginas hijas. Cada carpeta puede tener **su** layout.

Por ejemplo, si querés un layout solo para las páginas bajo `/cursos`, ponés `+layout.svelte` dentro de `src/routes/cursos/`:

```
  src/routes
      └─ cursos/
        ├─ +layout.svelte       → layout para /cursos/*
        └─ +page.svelte         → /cursos
```

Una vez que tengas un layout, Svelte renderizará ese archivo en esa ruta por defecto en lugar de `+page.svelte`, es tu responsabilidad renderizar el contenido de dicho archivo. Para ello debemos saber que el contenido de la página se pasa como propiedad al Layout llamada `children`, la cual debemos renderizar manualmente en el lugar del layout donde queramos que aparezca el contenido de la página.

  ```svelte
  <!-- src/routes/cursos/+layout.svelte -->
  <script lang="ts">
    // children() es una función que devuelve el contenido de la página actual
    let { children } = $props();
  </script>

  <header>Mi header de cursos</header>
  <main>
    {@render children()}
  </main>
  <footer>Mi footer de cursos</footer>
  ```

**Importante:** Los layouts se anidan, si ponés otro `+layout.svelte` dentro de `src/routes/cursos`, ese aplica solo a las rutas bajo `/cursos`.


## +error.svelte

La página de error puede mostrarse por dos motivos:

1. Error 404: si no existe la ruta, SvelteKit busca `src/routes/+error.svelte` y lo muestra.
2. Error lanzado en un loader/hook (Lo veremos muy por encima).

Podemos obtener datos del error utilizando el estado `page` provisto por SvelteKit.


  ```svelte
  <!-- src/routes/+error.svelte -->
  <script lang="ts">
    import { page } from '$app/state'
  </script>

  <h1>{page.status}</h1>
  <p>{page.error.message}</p>
  ```

## Rutas dinámicas

Las rutas dinámicas permiten capturar valores variables en la URL usando corchetes `[]`.

Por ejemplo, si tenemos una ruta `/cursos/[id]`, el valor de `id` estará disponible como `params.id` en el componente de la página.

  ```
  src/routes
      └─ cursos/
        └─ [id]/
          └─ +page.svelte      → /cursos/123  (params.id === "123")
  ```

Para obtener el valor del parámetro dinámico, podemos obtenerlo desde las props del componente tipandola para TypeScript.

  ```svelte
  <script lang="ts">
    import type { PageProps } from './$types'

    // Acceder al parámetro dinámico 'id'
    const { params }: PageProps = $props()
  </script>

  <h1>Id Recibido: {params.id}</h1>
  ```

### Parámetro opcional
El segmento puede **estar o no**.

`src/routes/blog/[[slug]]/+page.svelte:`

  ```
  /blog              (params.slug == undefined)
  /blog/sveltekit    (params.slug == "sveltekit")
  ```

### Resto del path

Captura **uno o más** segmentos restantes.

`src/routes/docs/[...rest]/+page.svelte:`

  ```
  /docs/getting-started/intro  (params.rest === "getting-started/intro")
  ```


## Groups con paréntesis

Los grupos sirven para **organizar** y **compartir layouts** sin afectar la URL. Se utilizan paréntesis en el nombre de la carpeta.

  ```
  src/routes
  ├─ (app)/
  │  ├─ +layout.svelte     → Layout A (solo para rutas dentro de (app))
  │  └─ dashboard/
  │     └─ +page.svelte    → /dashboard
  └─ (marketing)/
    ├─ +layout.svelte     → Layout B
    └─ landing/
        └─ +page.svelte    → /landing
  ```

La URL **no incluye** `(app)` ni `(marketing)`. Solo agrupan y separan layouts/lógicas.