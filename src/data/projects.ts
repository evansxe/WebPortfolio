import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'football-coach-app',
    title: 'Football Coach App',
    logoUrl: '/images/football-coach-app-logo.svg',
    color: '#16A34A',
    shortDescription: {
      en: 'A tool for football coaches to plan training sessions, manage squads, and organize matchday lineups.',
      es: 'Una herramienta para entrenadores de futbol para planificar entrenamientos, gestionar plantillas y organizar alineaciones.',
    },
    fullDescription: {
      en: 'Football Coach App is a native Android app built to help amateur and youth football coaches organize their team. Coaches can build a squad roster, plan training drills, and put together matchday lineups and formations, all from their phone.',
      es: 'Football Coach App es una app nativa de Android construida para ayudar a entrenadores de futbol amateur y de categorias juveniles a organizar su equipo. Los entrenadores pueden crear una plantilla, planificar ejercicios de entrenamiento y montar alineaciones y formaciones para cada partido, todo desde el movil.',
    },
    tech: ['Android', 'Java'],
    storeLinks: [],
    achievements: [],
    screenshots: ['/images/football-coach-app-shot-1.svg', '/images/football-coach-app-shot-2.svg'],
  },
  {
    slug: 'culturelog',
    title: 'CultureLog',
    logoUrl: '/images/culturelog-logo.svg',
    color: '#9333EA',
    shortDescription: {
      en: "A cross-platform app for logging and rating the books, films, and exhibitions you've experienced.",
      es: 'Una app multiplataforma para registrar y valorar los libros, peliculas y exposiciones que has vivido.',
    },
    fullDescription: {
      en: 'CultureLog is a personal log for tracking cultural life — books read, films watched, exhibitions visited — with quick entries and ratings so you can look back on what you\'ve experienced over time. Built natively for both Android (Java) and iOS (Swift).',
      es: 'CultureLog es un registro personal para llevar un seguimiento de tu vida cultural — libros leidos, peliculas vistas, exposiciones visitadas — con entradas rapidas y valoraciones para poder mirar atras y ver lo que has vivido con el tiempo. Construida de forma nativa tanto para Android (Java) como para iOS (Swift).',
    },
    tech: ['Android', 'Java', 'iOS', 'Swift'],
    storeLinks: [],
    achievements: [],
    screenshots: ['/images/culturelog-shot-1.svg', '/images/culturelog-shot-2.svg'],
  },
  {
    slug: 'tribo',
    title: 'Tribo',
    logoUrl: '/images/tribo-logo.svg',
    color: '#0EA5E9',
    shortDescription: {
      en: 'A social sports app for finding people to play and train with nearby, with a shared Kotlin Multiplatform frontend and a Django REST backend.',
      es: 'Una app social deportiva para encontrar gente con quien jugar y entrenar cerca, con un frontend compartido en Kotlin Multiplatform y un backend en Django REST.',
    },
    fullDescription: {
      en: "Tribo solves the everyday problem of finding people to play or train with nearby. Instead of scattering plans across chats, every event gets a discoverable page with location, time, capacity, comments, and participants, layered with social features like friends, groups, and notifications so people keep coming back. The project is split into two repositories: the frontend, a Kotlin Multiplatform (KMP) app targeting Android and iOS that shares one UI built with Compose Multiplatform and one business-logic layer across both platforms; and TriboBackend, a Django REST Framework API that both platforms talk to over HTTP.",
      es: 'Tribo resuelve el problema cotidiano de encontrar gente con quien jugar o entrenar cerca. En lugar de dispersar los planes entre chats, cada evento tiene una pagina descubrible con ubicacion, hora, aforo, comentarios y participantes, junto con funcionalidades sociales como amigos, grupos y notificaciones para que la gente vuelva a usar la app. El proyecto se divide en dos repositorios: el frontend, una app en Kotlin Multiplatform (KMP) para Android e iOS que comparte una unica UI construida con Compose Multiplatform y una capa de logica de negocio comun para ambas plataformas; y TriboBackend, una API con Django REST Framework con la que hablan ambas plataformas por HTTP.',
    },
    tech: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Android', 'iOS', 'Django REST Framework'],
    storeLinks: [],
    achievements: [],
    screenshots: ['/images/tribo-shot-1.svg', '/images/tribo-shot-2.svg'],
  },
  {
    slug: 'digidex',
    title: 'DigiDex',
    logoUrl: '/images/digidex-logo.svg',
    color: '#F59E0B',
    shortDescription: {
      en: 'A Digimon reference app in the same spirit as my Pokedex project — browse Digimon with their stats and details.',
      es: 'Una app de referencia de Digimon en la misma linea que mi proyecto Pokedex — explora Digimon con sus estadisticas y detalles.',
    },
    fullDescription: {
      en: 'DigiDex is a native Android app that lists Digimon with their stats, types, and evolution details, built as a companion to my Pokedex-style projects using the same Kotlin-based approach.',
      es: 'DigiDex es una app nativa de Android que lista Digimon con sus estadisticas, tipos y detalles de evolucion, construida como companera de mis proyectos estilo Pokedex usando el mismo enfoque basado en Kotlin.',
    },
    tech: ['Android', 'Kotlin'],
    storeLinks: [],
    achievements: [],
    screenshots: ['/images/digidex-shot-1.svg', '/images/digidex-shot-2.svg'],
  },
]
