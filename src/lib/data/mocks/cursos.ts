import type { Curso } from '$lib/types'
import { Nivel } from '$lib/types/curso'

export const CURSOS_MOCK: Curso[] = [
  {
    id: 1,
    titulo: 'Introducción a Svelte',
    descripcion: 'Aprende los conceptos básicos de Svelte.',
    lecciones: 10,
    duracionEnMinutos: 600,
    nivel: Nivel.Principiante
  },
  {
    id: 2,
    titulo: 'Svelte Avanzado',
    descripcion: 'Profundiza en las características avanzadas de Svelte.',
    lecciones: 15,
    duracionEnMinutos: 900,
    nivel: Nivel.Avanzado
  },
  {
    id: 3,
    titulo: 'Desarrollo de Aplicaciones con SvelteKit',
    descripcion: 'Construye aplicaciones completas usando SvelteKit.',
    lecciones: 20,
    duracionEnMinutos: 1200,
    nivel: Nivel.Intermedio
  },
  {
    id: 4,
    titulo: 'Componentes y Props en Svelte',
    descripcion: 'Creá componentes reutilizables y pasá datos con props.',
    lecciones: 10,
    duracionEnMinutos: 600,
    nivel: Nivel.Principiante
  },
  {
    id: 5,
    titulo: 'Reactividad y Stores (básico)',
    descripcion: 'Entendé la reactividad y usá stores para estado simple.',
    lecciones: 10,
    duracionEnMinutos: 600,
    nivel: Nivel.Principiante
  },
  {
    id: 6,
    titulo: 'Eventos y Formularios en Svelte',
    descripcion: 'Manejo de eventos, bindings y envío de formularios.',
    lecciones: 9,
    duracionEnMinutos: 540,
    nivel: Nivel.Principiante
  },
  {
    id: 7,
    titulo: 'Slots y Componentes Reutilizables',
    descripcion: 'Patrones con slots para componer interfaces limpias.',
    lecciones: 8,
    duracionEnMinutos: 480,
    nivel: Nivel.Principiante
  },
  {
    id: 8,
    titulo: 'Estilos y Scoped CSS',
    descripcion: 'Aplicá estilos locales y variables sin romper el layout.',
    lecciones: 8,
    duracionEnMinutos: 480,
    nivel: Nivel.Principiante
  },
  {
    id: 9,
    titulo: 'Enrutamiento Básico con SvelteKit',
    descripcion: 'Rutas, layouts y navegación esencial.',
    lecciones: 10,
    duracionEnMinutos: 600,
    nivel: Nivel.Principiante
  },
  {
    id: 10,
    titulo: 'Data Loading con load() y actions',
    descripcion: 'Cargá datos en server/client y enviá forms con actions.',
    lecciones: 14,
    duracionEnMinutos: 840,
    nivel: Nivel.Intermedio
  },
  {
    id: 11,
    titulo: 'Consumo de APIs con fetch',
    descripcion: 'Buenas prácticas para llamar APIs y manejar errores.',
    lecciones: 9,
    duracionEnMinutos: 540,
    nivel: Nivel.Principiante
  },
  {
    id: 12,
    titulo: 'Animaciones y Transiciones',
    descripcion: 'Transiciones, motion y microinteracciones en Svelte.',
    lecciones: 12,
    duracionEnMinutos: 720,
    nivel: Nivel.Intermedio
  },
  {
    id: 13,
    titulo: 'Testing con Vitest y Testing Library',
    descripcion: 'Testeá componentes y flujos críticos con confianza.',
    lecciones: 12,
    duracionEnMinutos: 720,
    nivel: Nivel.Intermedio
  },
  {
    id: 14,
    titulo: 'Deploy de SvelteKit a Vercel',
    descripcion: 'Configuración, variables de entorno y previews.',
    lecciones: 8,
    duracionEnMinutos: 480,
    nivel: Nivel.Principiante
  },
  {
    id: 15,
    titulo: 'SEO y Metadatos en SvelteKit',
    descripcion: 'Head tags, og:image, sitemaps y prácticas de SEO.',
    lecciones: 12,
    duracionEnMinutos: 720,
    nivel: Nivel.Intermedio
  },
  {
    id: 16,
    titulo: 'TypeScript en Svelte desde Cero',
    descripcion: 'Agregá tipos fuertes a tus componentes y stores.',
    lecciones: 10,
    duracionEnMinutos: 600,
    nivel: Nivel.Principiante
  },
  {
    id: 17,
    titulo: 'Stores: writable, readable y derived',
    descripcion: 'Modelá estado global y derivado sin dolores.',
    lecciones: 9,
    duracionEnMinutos: 540,
    nivel: Nivel.Principiante
  },
  {
    id: 18,
    titulo: 'Form Actions + Validación con Zod',
    descripcion: 'Forms robustos con validación tipada en server.',
    lecciones: 11,
    duracionEnMinutos: 660,
    nivel: Nivel.Principiante
  },
  {
    id: 19,
    titulo: 'SSR y SSG en Profundidad',
    descripcion: 'Renderizado en servidor, prerender y edge.',
    lecciones: 18,
    duracionEnMinutos: 1080,
    nivel: Nivel.Avanzado
  },
  {
    id: 20,
    titulo: 'Accesibilidad (a11y) en Svelte',
    descripcion: 'Patrones y checks para interfaces inclusivas.',
    lecciones: 8,
    duracionEnMinutos: 480,
    nivel: Nivel.Principiante
  },
  {
    id: 21,
    titulo: 'Autenticación con OAuth/JWT',
    descripcion: 'Rutas protegidas, sesiones y manejo de tokens.',
    lecciones: 14,
    duracionEnMinutos: 840,
    nivel: Nivel.Intermedio
  },
  {
    id: 22,
    titulo: 'TailwindCSS con Svelte',
    descripcion: 'Instalación, utilidades y composición de estilos.',
    lecciones: 10,
    duracionEnMinutos: 600,
    nivel: Nivel.Principiante
  },
  {
    id: 23,
    titulo: 'Performance y Optimización',
    descripcion: 'Code-splitting, lazy, hidración y profiling.',
    lecciones: 16,
    duracionEnMinutos: 960,
    nivel: Nivel.Avanzado
  }
]