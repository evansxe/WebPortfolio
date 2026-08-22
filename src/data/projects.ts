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
    logoUrl: '/images/tribo-logo.png',
    color: '#2E8FA8',
    shortDescription: {
      en: 'A social sports app for finding people to play and train with nearby, with a Kotlin Multiplatform frontend and a Django REST backend, both shipped to production.',
      es: 'Una app social deportiva para encontrar gente con quien jugar y entrenar cerca, con un frontend en Kotlin Multiplatform y un backend en Django REST, ambos en produccion.',
    },
    fullDescription: {
      en: "Tribo solves the everyday problem of finding people to play or train with nearby: every event gets a discoverable page with location, time, capacity, comments, and participants, layered with friends, groups, and notifications so people keep coming back instead of scattering plans across chats. The frontend is a Kotlin Multiplatform (KMP) app targeting Android and iOS that shares one UI built with Compose Multiplatform and one MVVM business-logic layer (ViewModel/StateFlow, use cases, repositories) across both platforms, wired with Koin and talking to the API over Ktor. It's backed by TriboBackend, a Django REST Framework API with token auth, Cloudinary media storage, and Firebase Cloud Messaging push. Joining a full event places you on a waitlist that auto-promotes the next person when a spot frees up; private events and groups go through a request/approve flow instead; and repeated like notifications on the same event are coalesced instead of spamming the feed. Both halves are live in production — the app on the Play Store, the API on Railway.",
      es: 'Tribo resuelve el problema cotidiano de encontrar gente con quien jugar o entrenar cerca: cada evento tiene una pagina descubrible con ubicacion, hora, aforo, comentarios y participantes, junto con amigos, grupos y notificaciones para que la gente vuelva a usar la app en lugar de dispersar los planes entre chats. El frontend es una app en Kotlin Multiplatform (KMP) para Android e iOS que comparte una unica UI construida con Compose Multiplatform y una capa de logica de negocio MVVM (ViewModel/StateFlow, casos de uso, repositorios) para ambas plataformas, conectada con Koin y hablando con la API mediante Ktor. Detras esta TriboBackend, una API con Django REST Framework con autenticacion por token, almacenamiento de medios en Cloudinary y notificaciones push con Firebase Cloud Messaging. Unirse a un evento completo te coloca en una lista de espera que promociona automaticamente al siguiente cuando se libera un hueco; los eventos y grupos privados pasan por un flujo de solicitud/aprobacion; y los likes repetidos sobre el mismo evento se agrupan en una sola notificacion en lugar de saturar el feed. Ambas mitades estan en produccion — la app en Play Store, la API en Railway.',
    },
    tech: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Android', 'iOS', 'Ktor', 'Koin', 'Django REST Framework'],
    storeLinks: [
      { store: 'android', url: 'https://play.google.com/store/apps/details?id=com.devan.triboapp' },
      { store: 'github', url: 'https://github.com/evansxe/TriboApp' },
    ],
    achievements: [
      {
        en: 'Shipped both halves to production: a Kotlin Multiplatform app on the Play Store and its own Django REST Framework backend deployed on Railway.',
        es: 'Publico ambas mitades en produccion: una app en Kotlin Multiplatform en Play Store y su propio backend en Django REST Framework desplegado en Railway.',
      },
      {
        en: 'One shared Compose Multiplatform UI and MVVM business-logic layer driving both the Android and iOS apps, validated by roughly 390 unit tests (MockK, Ktor MockEngine) covering every repository and ViewModel.',
        es: 'Una unica UI en Compose Multiplatform y una capa de logica de negocio MVVM que impulsan tanto la app de Android como la de iOS, validadas con unos 390 tests unitarios (MockK, Ktor MockEngine) que cubren cada repositorio y ViewModel.',
      },
      {
        en: 'Real social-app mechanics built end to end: automatic waitlist promotion/demotion as event capacity changes, coalesced push notifications via Firebase Cloud Messaging, and a full friends/groups system with request-approval flows.',
        es: 'Mecanicas reales de app social construidas de principio a fin: promocion/degradacion automatica de listas de espera al cambiar el aforo de un evento, notificaciones push agrupadas via Firebase Cloud Messaging, y un sistema completo de amigos/grupos con flujos de solicitud y aprobacion.',
      },
    ],
    screenshots: [
      '/images/tribo-shot-1.png',
      '/images/tribo-shot-2.png',
      '/images/tribo-shot-3.png',
      '/images/tribo-shot-4.png',
      '/images/tribo-shot-5.png',
      '/images/tribo-shot-6.png',
      '/images/tribo-shot-7.png',
      '/images/tribo-shot-8.png',
    ],
  },
  {
    slug: 'digidex',
    title: 'DigiDex',
    logoUrl: '/images/digidex-logo.svg',
    color: '#0056B3',
    shortDescription: {
      en: 'A native Android encyclopedia for Digimon, built with Jetpack Compose and Material 3, with live data, search, and evolution trees.',
      es: 'Una enciclopedia nativa de Android para Digimon, construida con Jetpack Compose y Material 3, con datos en vivo, busqueda y arboles evolutivos.',
    },
    fullDescription: {
      en: 'DigiDex is a native Android app that lets you browse, search, and dig into the details of over a thousand Digimon. Digimon are organized by evolution level (Baby, Child, Adult, Perfect, Ultimate, and more) in expandable sections, with live search that filters and auto-expands matching categories as you type. Each Digimon has its own detail screen with tabs for general info, stats (attributes, types, fields, skills), and its prior and next evolutions, with direct navigation between related Digimon. Under the hood it follows Clean Architecture (data/domain/UI layers) with MVVM, Hilt for dependency injection, and Kotlin Coroutines and Flow for reactive state, consuming the public Digi-API over Retrofit and Moshi. The whole UI, including the brand mark and adaptive app icon, was designed and built from scratch with a custom Material 3 design system — its own shape and typography scale on top of a Google Fonts identity — with full light and dark theme support and no third-party artwork.',
      es: 'DigiDex es una app nativa de Android para explorar, buscar y consultar los detalles de mas de mil Digimon. Los Digimon se organizan por nivel evolutivo (Baby, Child, Adult, Perfect, Ultimate y mas) en secciones expandibles, con una busqueda en vivo que filtra y expande automaticamente las categorias con resultados a medida que escribes. Cada Digimon tiene su propia pantalla de detalle con pestanas para informacion general, estadisticas (atributos, tipos, campos, habilidades) y sus evoluciones anteriores y siguientes, con navegacion directa entre Digimon relacionados. Por dentro sigue una Clean Architecture (capas de datos/dominio/UI) con MVVM, Hilt para inyeccion de dependencias, y Coroutines y Flow de Kotlin para el estado reactivo, consumiendo la Digi-API publica mediante Retrofit y Moshi. Toda la interfaz, incluyendo la marca y el icono adaptativo de la app, fue disenada y construida desde cero con un sistema de diseno Material 3 propio — su propia escala de formas y tipografia sobre una identidad de Google Fonts — con soporte completo de tema claro y oscuro y sin usar arte de terceros.',
    },
    tech: ['Android', 'Kotlin', 'Jetpack Compose', 'Material 3', 'Hilt', 'Retrofit', 'Coroutines & Flow'],
    storeLinks: [{ store: 'github', url: 'https://github.com/evansxe/DigiDex' }],
    achievements: [
      {
        en: 'Consumes the public Digi-API in real time to browse and search over 1,000 Digimon across every evolution stage.',
        es: 'Consume la Digi-API publica en tiempo real para explorar y buscar mas de 1.000 Digimon en todas las etapas evolutivas.',
      },
      {
        en: 'Built a complete custom Material 3 design system from scratch — shape scale, full typography with a Google Fonts identity, and an original hand-drawn brand mark and adaptive icon — with no third-party artwork.',
        es: 'Construyo un sistema de diseno Material 3 propio desde cero — escala de formas, tipografia completa con identidad de Google Fonts, y una marca e icono adaptativo originales — sin usar arte de terceros.',
      },
      {
        en: 'Clean Architecture with MVVM, Hilt dependency injection, and Kotlin Flow-driven reactive state across the list, search, and detail screens.',
        es: 'Clean Architecture con MVVM, inyeccion de dependencias con Hilt, y estado reactivo con Kotlin Flow en las pantallas de lista, busqueda y detalle.',
      },
    ],
    screenshots: ['/images/digidex-shot-1.png', '/images/digidex-shot-2.png'],
  },
]
