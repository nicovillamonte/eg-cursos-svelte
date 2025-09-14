---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  ogImage: auto
  # ogImage: https://cover.sli.dev
hideInToc: true
---

# Svelte Routing {toc="false"}

<div class="abs-br m-6 text-xl">
  <a href="https://svelte.dev/docs/kit/routing" target="_blank" class="slidev-icon-btn">
    <carbon:logo-svelte/>
  </a>
</div>

---
transition: fade-out
hideInToc: true
---

# Indice

<Toc minDepth={1} maxDepth={2} />

---
transition: slide-left
---

# Ruteo Simple

<div class="pr-8 max-w-prose space-y-3">
  <ul class="list-disc pl-6 text-md leading-relaxed">
    <li>El ruteo en Sveltekit es basado en archivos.</li>
    <li v-click="1" v-motion
    :initial="{ opacity: 0, x: -12 }"
    :enter="{ opacity: 1, x: 0 }"><code>src/routes</code> es la ruta raíz.</li>
    <li v-click="2" v-motion
    :initial="{ opacity: 0, x: -12 }"
    :enter="{ opacity: 1, x: 0 }">Los archivos <code>+page.svelte</code> contienen el código de la página.</li>
    <li v-click="3" v-motion
    :initial="{ opacity: 0, x: -12 }"
    :enter="{ opacity: 1, x: 0 }">Para rutas anidadas, creá carpetas con sus <code>+page.svelte</code>.</li>
  </ul>
</div>

<br/>


<div class="pl-8 w-full" v-click="1">
  <div class="rounded-xl shadow-xl p-4 bg-white/5">
```text {0|1-2|2,4|2,5-6}
src/
  routes/
  ├─ +layout.svelte
  ├─ +page.svelte                    # /
  └─ cursos/
     └─ +page.svelte                 # /cursos
```
</div> 

<b v-click="2"> URL: </b>
<div class="mt-6 text-lg font-mono tracking-wide">
  <template v-if="$clicks >= 2 && $clicks < 3">
    http://localhost:5173
  </template>
  <template v-if="$clicks >= 3">
    http://localhost:5173/cursos
  </template>
</div>
</div>


---
transition: slide-left
---

## Archivo `+page.svelte`


```vue {monaco}
<script lang="ts">
  // Logica de la página
</script>

<h1>Hola Mundo</h1>
```

<div class="w-full flex justify-center">
  <img class="border-4 border-white/10 rounded-lg shadow-lg mt-6" src="./assets/holaMundoPage.png" alt="Pagina Hola Mundo" />
</div>

---
transition: slide-left
---

## Archivo `+page.svelte` en una subcarpeta


Si creamos una carpeta `cursos` dentro de `routes` debemos agregar un nuevo archivo `+page.svelte` dentro de esa carpeta, esa será la página que se renderice al acceder a `/cursos`.

```text {5-6}
src/
  routes/
  ├─ +layout.svelte
  ├─ +page.svelte                    # /
  └─ cursos/
     └─ +page.svelte                 # /cursos
```

<div class="w-full flex justify-center">
  <img class="border-4 border-white/10 rounded-lg shadow-lg mt-6" src="./assets/cursosPagina.png" alt="Pagina Cursos" />
</div>


---
transition: slide-left
---

## Archivo `+layout.svelte`

El archivo `+layout.svelte` es un componente que envuelve a todas las páginas hijas. Es útil para definir una estructura común, como un encabezado o pie de página.

<div v-click="1">
En este caso el archivo `+layout.svelte` va a aplicar a todas las páginas dentro de `routes`, es decir a `/` y a `/cursos`.
</div>


```text {3|3,4,6}
src/
  routes/
  ├─ +layout.svelte
  ├─ +page.svelte                    # /
  └─ cursos/
     └─ +page.svelte                 # /cursos
```

<div v-click="2" class="mt-10 color-gray">
Todos los directorios dentro de <code>routes</code> pueden tener su propio <code>+layout.svelte</code> que aplicará a todas las páginas hijas de ese directorio.
</div>

---
transition: slide-left
---

### Ejemplo de layout

Una vez que se crea el archivo `+layout.svelte`, la página que se renderiza por defecto es la del layout, por lo que es necesario invocar a la página hija:

```vue {monaco}
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  // ...
</script>

<header>
  <!-- Codigo del header -->
</header>

<slot />  <!-- ¿Esto está bien? -->
```


<div class=" mt-6">
<b>Slot</b> es una característica de Svelte deprecada, que sigue funcionando pero no se recomienda su uso en nuevos proyectos. En su lugar, se puede utilizar la sintaxis de props para pasar componentes hijos y renderizarlo dentro del componente padre.
</div>


---
transition: slide-left
---

### Doble Layout

<script setup>
import { ref } from 'vue'
const answer = ref('')
</script>

Ahora, que pasará en la ruta `/cursos` si agregamos un archivo `+layout.svelte` en su carpeta?

```text {3,5-6}
src/
  routes/
  ├─ +layout.svelte
  ├─ +page.svelte                    # /
  └─ cursos/
     ├─ +layout.svelte
     └─ +page.svelte                 # /cursos
```


<form class="space-y-3 mt-10">
  <label class="block">
    <input type="radio" v-model="answer" value="a" />
    Se va a pisar el Layout de la raíz por el nuevo Layout
  </label>
  <label class="block">
    <input type="radio" v-model="answer" value="b" />
    Se van a renderizar ambos Layouts, el de la raíz y el nuevo Layout
  </label>
  <label class="block">
    <input type="radio" v-model="answer" value="c" />
    Solo se va a renderizar el Layout de la raíz
  </label>
</form>

<div class="mt-6">
  <div v-if="answer === 'a'" class="text-red-400 font-bold">
    ❌ Incorrecto, el Layout raíz no se pisa.
  </div>
  <div v-else-if="answer === 'b'" class="text-green-400 font-bold">
    ✅ Correcto: se renderizan ambos Layouts.
  </div>
  <div v-else-if="answer === 'c'" class="text-red-400 font-bold">
    ❌ Incorrecto, el Layout raíz siempre se combina con el nuevo.
  </div>
</div>


---
transition: slide-left
---

# Ruteo Dinámico

El ruteo dinámico permite crear rutas que aceptan parámetros variables. Esto se logra utilizando corchetes en los nombres de los archivos o carpetas dentro de `src/routes`.

```text {5-6}
src/
  routes/
  ├─ +layout.svelte
  ├─ +page.svelte                    # /
  └─ cursos/
     ├─ [id]/
     │  └─ +page.svelte              # /cursos/:id
     └─ +page.svelte                 # /cursos
```

Esto permite que la ruta `/cursos/:id` pueda manejar diferentes valores para `id`, como: 

- `/cursos/1`
- `/cursos/2`
- `/cursos/abc`
- `/cursos/pepita`


---
transition: slide-left
---

## Obtención de Parámetros

Para obtener el valor del parámetro en la página, se puede utilizar la función `page` del módulo `$app/stores`.

```vue {monaco}
<script lang="ts">
  import { page } from '$app/stores';
</script>

<h1>Curso ID: {$page.params.id}</h1>
```

TODO: Poner foto aca de la pagina con el id

