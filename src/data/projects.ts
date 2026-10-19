import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'football-coach-app',
    title: 'Football Coach App',
    logoUrl: '/images/football-coach-app-logo.svg',
    color: '#0C447C',
    shortDescription: {
      en: 'A Kotlin Multiplatform rewrite of the team-management app for football coaches — offline-first, synced to a Django backend, with a free tier and a Pro subscription. Live on Google Play with over 180,000 total users; iOS launching soon.',
      es: 'Una reescritura en Kotlin Multiplatform de la app de gestion de equipos para entrenadores de futbol — offline-first, sincronizada con un backend en Django, con un nivel gratuito y una suscripcion Pro. En Google Play con mas de 180.000 usuarios totales; iOS llega pronto.',
    },
    fullDescription: {
      en: "Football Coach App is a team-management suite for amateur and grassroots coaches, rebuilt from the ground up as a Kotlin Multiplatform app sharing one Compose Multiplatform UI and MVVM layer across Android and an upcoming iOS release. Coaches build a squad roster, put together matchday lineups and tactics plans (formations, captains, set-piece takers) with a slot-based editor, track live matches minute by minute (score, goals, cards, substitutions), and plan training sessions from an exercise library with a freehand drawing board. The app is offline-first: every read and write goes through a local SQLDelight cache with a sync queue and conflict resolution, so a coach can run a match with no signal at the pitch and have it reconcile automatically once back online. It's backed by a from-scratch Django REST Framework API (JWT auth, Postgres, Cloudinary for media) deployed on Railway, and a RevenueCat-powered Pro subscription — invite your coaching staff with roles and permissions, run several squads, track rivals head-to-head, log fines and payments, and export PDF reports — layered on top of a free tier that still runs a full team. The app also adapts its layout for tablets rather than just stretching the phone UI. Live on Google Play under the same listing it grew up on, past 180,000 total users with a 4.3-star rating across roughly 1,700 reviews; the iOS release is in progress on the same shared codebase.",
      es: 'Football Coach App es una suite de gestion de equipos para entrenadores de futbol amateur y de categorias juveniles, reconstruida desde cero como una app en Kotlin Multiplatform que comparte una unica UI en Compose Multiplatform y una capa MVVM entre Android y una proxima version para iOS. Los entrenadores crean una plantilla, montan alineaciones y planes tacticos (formaciones, capitanes, lanzadores de jugadas a balon parado) con un editor por posiciones, siguen los partidos en directo minuto a minuto (resultado, goles, tarjetas, cambios) y planifican entrenamientos desde una biblioteca de ejercicios con una pizarra de dibujo libre. La app es offline-first: cada lectura y escritura pasa por una cache local con SQLDelight y una cola de sincronizacion con resolucion de conflictos, de modo que un entrenador puede llevar un partido sin cobertura en el campo y que todo se reconcilie solo al recuperar conexion. Esta respaldada por una API propia con Django REST Framework (autenticacion JWT, Postgres, Cloudinary para multimedia) desplegada en Railway, y una suscripcion Pro gestionada con RevenueCat — invita a tu cuerpo tecnico con roles y permisos, gestiona varios equipos, sigue el historial frente a cada rival, registra multas y pagos, y exporta informes en PDF — sobre una capa gratuita que ya permite llevar un equipo completo. La app tambien adapta su diseño para tablets en lugar de limitarse a estirar la interfaz del movil. Disponible en Google Play bajo la misma ficha con la que crecio, con mas de 180.000 usuarios totales, una valoracion de 4,3 estrellas y unas 1.700 resenas; la version de iOS esta en marcha sobre el mismo codigo compartido.',
    },
    tech: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Ktor', 'SQLDelight', 'RevenueCat', 'Django REST Framework'],
    storeLinks: [
      { store: 'android', url: 'https://play.google.com/store/apps/details?id=devan.footballcoach' },
      { store: 'web', url: 'https://footballcoach.devanforge.com' },
    ],
    achievements: [
      {
        en: 'Rebuilt from a native Android app into a Kotlin Multiplatform codebase sharing one Compose Multiplatform UI and MVVM layer across Android and iOS, without resetting the Google Play listing it had already grown past 180,000 total users on.',
        es: 'Reconstruida desde una app nativa de Android hasta un codigo en Kotlin Multiplatform que comparte una unica UI en Compose Multiplatform y una capa MVVM entre Android e iOS, sin reiniciar la ficha de Google Play con la que ya habia superado los 180.000 usuarios totales.',
      },
      {
        en: 'Built an offline-first sync engine from scratch: a local SQLDelight cache with a change queue, idempotent writes, tombstoned deletes, and last-write-wins conflict resolution against a Django REST Framework API on Railway.',
        es: 'Construyo un motor de sincronizacion offline-first desde cero: una cache local con SQLDelight y una cola de cambios, escrituras idempotentes, borrados con tombstone y resolucion de conflictos last-write-wins contra una API en Django REST Framework desplegada en Railway.',
      },
      {
        en: 'Designed and shipped a freemium Pro tier on RevenueCat, end to end: client paywalls with a 7-day free trial, and a webhook-driven entitlement engine on the backend that applies purchase/renewal/refund events per user, correctly handling out-of-order delivery and a grace period for late renewals so a match day never hits a paywall. Pro unlocks staff invites with per-role permissions, multi-squad support, rival head-to-head records, fines and payments, and PDF/image exports, without locking any data for users who stay on the free plan.',
        es: 'Diseno y lanzo un nivel Pro freemium sobre RevenueCat, de principio a fin: paywalls en el cliente con una prueba gratuita de 7 dias, y un motor de entitlements en el backend dirigido por webhooks que aplica eventos de compra/renovacion/reembolso por usuario, gestionando correctamente entregas desordenadas y un periodo de gracia para renovaciones tardias para que un dia de partido nunca choque con un paywall. Pro desbloquea invitaciones al cuerpo tecnico con permisos por rol, gestion de varios equipos, historial frente a cada rival, multas y pagos, y exportacion a PDF/imagen, sin bloquear datos a quienes se quedan en el plan gratuito.',
      },
    ],
    screenshots: [
      '/images/football-coach-app-shot-1.webp',
      '/images/football-coach-app-shot-2.webp',
      '/images/football-coach-app-shot-3.webp',
      '/images/football-coach-app-shot-4.webp',
      '/images/football-coach-app-shot-5.webp',
      '/images/football-coach-app-shot-6.webp',
    ],
  },
  {
    slug: 'culturelog',
    title: 'CultureLog',
    logoUrl: '/images/culturelog-logo.webp',
    color: '#9333EA',
    shortDescription: {
      en: 'A personal media log for movies, TV, books, and games that pulls live metadata from TMDB, Google Books, and IGDB — published on Google Play.',
      es: 'Un registro personal de peliculas, series, libros y juegos que obtiene metadatos en vivo de TMDB, Google Books e IGDB — publicado en Google Play.',
    },
    fullDescription: {
      en: "CultureLog is a personal log for cultural life — movies, TV shows, books, and games you've finished, are working through, or have queued up — with ratings, dates, comments, and cover art so you can look back on what you've experienced over time. Adding an item searches TMDB, Google Books, or the IGDB/Twitch API depending on the category, pulling in cover art and metadata automatically over Retrofit, RxJava, and OkHttp, including OAuth2 client-credentials token handling for IGDB's access tokens. A stats screen surfaces your best- and worst-rated item per category and year, and a no-account cross-device backup zips the local greenDao database, uploads it to Firebase Storage under an anonymous auth session, and hands you a 6-digit code to pull it back down on another phone. The Android app is the shipped product, published on Google Play; an earlier native iOS (Swift, UIKit) build explored the same concept before development consolidated on Android.",
      es: 'CultureLog es un registro personal de tu vida cultural — peliculas, series, libros y juegos que has terminado, estas siguiendo o tienes pendientes — con valoraciones, fechas, comentarios y caratulas para poder mirar atras y ver lo que has vivido con el tiempo. Al añadir un elemento se busca en TMDB, Google Books o la API de IGDB/Twitch segun la categoria, trayendo caratulas y metadatos automaticamente mediante Retrofit, RxJava y OkHttp, incluyendo el manejo de tokens OAuth2 de tipo client-credentials para IGDB. Una pantalla de estadisticas muestra tu mejor y peor valoracion por categoria y año, y una copia de seguridad entre dispositivos sin necesidad de cuenta comprime la base de datos local en greenDao, la sube a Firebase Storage bajo una sesion anonima, y te da un codigo de 6 digitos para recuperarla en otro telefono. La app de Android es el producto publicado en Google Play; una version nativa anterior para iOS (Swift, UIKit) exploro la misma idea antes de que el desarrollo se centrara en Android.',
    },
    tech: ['Android', 'Kotlin', 'Java', 'Retrofit', 'RxJava', 'greenDao', 'Firebase'],
    storeLinks: [{ store: 'android', url: 'https://play.google.com/store/apps/details?id=com.devan.culturelog' }],
    achievements: [
      {
        en: 'Aggregates three third-party metadata APIs — TMDB, Google Books, and IGDB/Twitch — behind one unified search flow, including OAuth2 client-credentials token refresh for IGDB.',
        es: 'Combina tres APIs externas de metadatos — TMDB, Google Books e IGDB/Twitch — en un unico flujo de busqueda, incluyendo la renovacion de tokens OAuth2 client-credentials para IGDB.',
      },
      {
        en: 'Built a no-account cross-device backup: zips the local database, uploads it to Firebase Storage under an anonymous auth session, and restores it on another device with a 6-digit transfer code.',
        es: 'Construyo una copia de seguridad entre dispositivos sin necesidad de cuenta: comprime la base de datos local, la sube a Firebase Storage bajo una sesion anonima, y la restaura en otro dispositivo con un codigo de 6 digitos.',
      },
      {
        en: 'Published on Google Play at a 4.7-star rating, after an earlier native iOS (Swift/UIKit) prototype explored the same idea.',
        es: 'Publicada en Google Play con una valoracion de 4,7 estrellas, tras un prototipo nativo anterior para iOS (Swift/UIKit) que exploro la misma idea.',
      },
    ],
    screenshots: [],
  },
  {
    slug: 'tribofit',
    title: 'TriboFit',
    logoUrl: '/images/tribofit-logo.webp',
    color: '#2E8FA8',
    shortDescription: {
      en: 'A social sports app for finding people to play and train with nearby, with a Kotlin Multiplatform frontend and a Django REST backend — live on both the App Store and Google Play.',
      es: 'Una app social deportiva para encontrar gente con quien jugar y entrenar cerca, con un frontend en Kotlin Multiplatform y un backend en Django REST — disponible en App Store y Google Play.',
    },
    fullDescription: {
      en: "TriboFit (rebranded from Tribo) solves the everyday problem of finding people to play or train with nearby: every event gets a discoverable page with location, time, weather forecast, capacity, comments, and participants, layered with friends, groups, and notifications so people keep coming back instead of scattering plans across chats. The frontend is a Kotlin Multiplatform (KMP) app sharing one UI built with Compose Multiplatform and one MVVM business-logic layer (ViewModel/StateFlow, use cases, repositories) across Android and iOS, wired with Koin, talking to the API over Ktor, and supporting both Google and Apple Sign-In. It's backed by TriboBackend, a Django REST Framework API with token auth, Cloudinary media storage, and Firebase Cloud Messaging push. Joining a full event places you on a waitlist that auto-promotes the next person when a spot frees up; private events and groups go through a request/approve flow instead; and repeated like notifications on the same event are coalesced instead of spamming the feed. Both halves are live in production — the app on the App Store and Play Store, the API on Railway.",
      es: 'TriboFit (nuevo nombre de Tribo) resuelve el problema cotidiano de encontrar gente con quien jugar o entrenar cerca: cada evento tiene una pagina descubrible con ubicacion, hora, prevision meteorologica, aforo, comentarios y participantes, junto con amigos, grupos y notificaciones para que la gente vuelva a usar la app en lugar de dispersar los planes entre chats. El frontend es una app en Kotlin Multiplatform (KMP) que comparte una unica UI construida con Compose Multiplatform y una capa de logica de negocio MVVM (ViewModel/StateFlow, casos de uso, repositorios) entre Android e iOS, conectada con Koin, hablando con la API mediante Ktor, y con inicio de sesion con Google y con Apple. Detras esta TriboBackend, una API con Django REST Framework con autenticacion por token, almacenamiento de medios en Cloudinary y notificaciones push con Firebase Cloud Messaging. Unirse a un evento completo te coloca en una lista de espera que promociona automaticamente al siguiente cuando se libera un hueco; los eventos y grupos privados pasan por un flujo de solicitud/aprobacion; y los likes repetidos sobre el mismo evento se agrupan en una sola notificacion en lugar de saturar el feed. Ambas mitades estan en produccion — la app en App Store y Play Store, la API en Railway.',
    },
    tech: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Android', 'iOS', 'Ktor', 'Koin', 'Django REST Framework'],
    storeLinks: [
      { store: 'ios', url: 'https://apps.apple.com/us/app/tribofit/id6808693117' },
      { store: 'android', url: 'https://play.google.com/store/apps/details?id=com.devan.triboapp' },
      { store: 'web', url: 'https://tribofit.devanforge.com' },
      { store: 'github', url: 'https://github.com/evansxe/TriboApp' },
    ],
    achievements: [
      {
        en: 'Shipped both halves to production and onto both app stores: a Kotlin Multiplatform app on the App Store and Play Store, and its own Django REST Framework backend deployed on Railway.',
        es: 'Publico ambas mitades en produccion y en las dos tiendas de apps: una app en Kotlin Multiplatform en App Store y Play Store, y su propio backend en Django REST Framework desplegado en Railway.',
      },
      {
        en: 'One shared Compose Multiplatform UI and MVVM business-logic layer driving both the Android and iOS apps — including Apple and Google Sign-In — validated by roughly 390 unit tests (MockK, Ktor MockEngine) covering every repository and ViewModel.',
        es: 'Una unica UI en Compose Multiplatform y una capa de logica de negocio MVVM que impulsan tanto la app de Android como la de iOS — incluido el inicio de sesion con Apple y Google — validadas con unos 390 tests unitarios (MockK, Ktor MockEngine) que cubren cada repositorio y ViewModel.',
      },
      {
        en: 'Real social-app mechanics built end to end: automatic waitlist promotion/demotion as event capacity changes, coalesced push notifications via Firebase Cloud Messaging, and a full friends/groups system with request-approval flows.',
        es: 'Mecanicas reales de app social construidas de principio a fin: promocion/degradacion automatica de listas de espera al cambiar el aforo de un evento, notificaciones push agrupadas via Firebase Cloud Messaging, y un sistema completo de amigos/grupos con flujos de solicitud y aprobacion.',
      },
    ],
    screenshots: [
      '/images/tribofit-shot-1.webp',
      '/images/tribofit-shot-2.webp',
      '/images/tribofit-shot-3.webp',
      '/images/tribofit-shot-4.webp',
      '/images/tribofit-shot-5.webp',
      '/images/tribofit-shot-6.webp',
    ],
  },
  {
    slug: 'digidex',
    title: 'DigiDex',
    logoUrl: '/images/digidex-logo.svg',
    color: '#142850',
    shortDescription: {
      en: 'A native Android encyclopedia for Digimon, built with Jetpack Compose and Material 3, with live data, search, and evolution trees.',
      es: 'Una enciclopedia nativa de Android para Digimon, construida con Jetpack Compose y Material 3, con datos en vivo, busqueda y arboles evolutivos.',
    },
    fullDescription: {
      en: 'DigiDex is a native Android app that lets you browse, search, and dig into the details of over a thousand Digimon. Digimon are organized by evolution level (Baby, Child, Adult, Perfect, Ultimate, and more) with a filter-chip row over a scrolling grid, plus live search that narrows within whichever level is selected. Each Digimon has its own detail screen with a persistent hero and tabs for general info, stats (attributes, types, fields, skills), and its prior and next evolutions, with direct navigation between related Digimon. Under the hood it follows Clean Architecture (data/domain/UI layers) with MVVM, Hilt for dependency injection, and Kotlin Coroutines and Flow for reactive state, consuming the public Digi-API over Retrofit and Moshi. The whole UI, including the brand mark and adaptive app icon, was designed and built from scratch with a custom Material 3 design system — its own shape, typography, and color palette on top of a Google Fonts identity — with full light and dark theme support and no third-party artwork.',
      es: 'DigiDex es una app nativa de Android para explorar, buscar y consultar los detalles de mas de mil Digimon. Los Digimon se organizan por nivel evolutivo (Baby, Child, Adult, Perfect, Ultimate y mas) con una fila de chips de filtro sobre una cuadricula desplazable, ademas de una busqueda en vivo que filtra dentro del nivel seleccionado. Cada Digimon tiene su propia pantalla de detalle con una cabecera persistente y pestanas para informacion general, estadisticas (atributos, tipos, campos, habilidades) y sus evoluciones anteriores y siguientes, con navegacion directa entre Digimon relacionados. Por dentro sigue una Clean Architecture (capas de datos/dominio/UI) con MVVM, Hilt para inyeccion de dependencias, y Coroutines y Flow de Kotlin para el estado reactivo, consumiendo la Digi-API publica mediante Retrofit y Moshi. Toda la interfaz, incluyendo la marca y el icono adaptativo de la app, fue disenada y construida desde cero con un sistema de diseno Material 3 propio — su propia escala de formas, tipografia y paleta de colores sobre una identidad de Google Fonts — con soporte completo de tema claro y oscuro y sin usar arte de terceros.',
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
    screenshots: ['/images/digidex-shot-1.webp', '/images/digidex-shot-2.webp'],
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    logoUrl: '/favicon.svg',
    color: '#6366F1',
    shortDescription: {
      en: 'This site itself — a bilingual React/TypeScript portfolio with dark mode, scroll animations, and a print-ready CV, deployed on GitHub Pages.',
      es: 'Este mismo sitio — un portfolio bilingue en React/TypeScript con modo oscuro, animaciones al hacer scroll y un CV listo para imprimir, desplegado en GitHub Pages.',
    },
    fullDescription: {
      en: "The site you're looking at right now. Built with React, TypeScript, and Vite, styled with Tailwind CSS, and fully bilingual (English/Spanish) via react-i18next with automatic language detection and a manual switch. It ships light and dark themes, scroll-triggered reveal animations, a mouse-tracked spotlight effect on project cards, and a dedicated print stylesheet so the CV page renders as a clean PDF straight from the browser. All content — profile, skills, experience, and this very project list — lives in typed TypeScript data files, so adding a project or updating a bio is a data change, not a layout change. It deploys automatically to GitHub Pages via GitHub Actions on every push to master.",
      es: 'El sitio que estas viendo ahora mismo. Construido con React, TypeScript y Vite, con estilos en Tailwind CSS, y totalmente bilingue (ingles/español) mediante react-i18next, con deteccion automatica del idioma y un selector manual. Incluye temas claro y oscuro, animaciones de aparicion al hacer scroll, un efecto de spotlight que sigue el raton en las tarjetas de proyectos, y una hoja de estilos de impresion dedicada para que la pagina del CV se pueda exportar como PDF limpio directamente desde el navegador. Todo el contenido — perfil, habilidades, experiencia y esta misma lista de proyectos — vive en archivos de datos TypeScript tipados, asi que añadir un proyecto o actualizar una biografia es un cambio de datos, no de maquetacion. Se despliega automaticamente en GitHub Pages mediante GitHub Actions en cada push a master.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'react-i18next', 'GitHub Actions'],
    storeLinks: [
      { store: 'web', url: 'https://portfolio.devanforge.com/' },
      { store: 'github', url: 'https://github.com/evansxe/WebPortfolio' },
    ],
    achievements: [
      {
        en: 'Fully bilingual (English/Spanish) with automatic browser-language detection and a manual switch, covering every section including the printable CV.',
        es: 'Totalmente bilingue (ingles/español) con deteccion automatica del idioma del navegador y selector manual, cubriendo cada seccion incluido el CV imprimible.',
      },
      {
        en: 'Typed content architecture — profile, skills, experience, and projects are all plain TypeScript data files, so the whole site updates from data changes alone, with no JSX edits needed.',
        es: 'Arquitectura de contenido tipada — perfil, habilidades, experiencia y proyectos son simples archivos de datos TypeScript, de modo que todo el sitio se actualiza solo con cambios de datos, sin tocar JSX.',
      },
      {
        en: 'Continuous deployment to GitHub Pages via GitHub Actions, building and publishing automatically on every push to master.',
        es: 'Despliegue continuo a GitHub Pages mediante GitHub Actions, compilando y publicando automaticamente en cada push a master.',
      },
    ],
    screenshots: [],
  },
]
