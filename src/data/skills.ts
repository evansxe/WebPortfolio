import {
  SiAndroid,
  SiAngular,
  SiClaudecode,
  SiCoderabbit,
  SiCss,
  SiDjango,
  SiFirebase,
  SiGithubcopilot,
  SiGoogleanalytics,
  SiGooglegemini,
  SiHtml5,
  SiJson,
  SiKotlin,
  SiKtor,
  SiMysql,
  SiPython,
  SiReactivex,
  SiSqlite,
  SiSwift,
  SiTypescript,
} from 'react-icons/si'
import {
  TbApi,
  TbBrandKotlin,
  TbBrandOpenai,
  TbBug,
  TbCoffee,
  TbComponents,
  TbDatabase,
  TbGitMerge,
  TbGitPullRequest,
  TbPlugConnected,
  TbPuzzle,
  TbRefresh,
  TbRocket,
  TbStack2,
  TbTags,
  TbTestPipe,
  TbWaveSine,
} from 'react-icons/tb'
import type { SkillItem } from '../types'

export const skills: SkillItem[] = [
  // Languages
  {
    name: 'Java',
    category: 'languages',
    icon: TbCoffee,
    color: '#E76F00',
    description: {
      en: 'A general-purpose, object-oriented language and the traditional choice for native Android development.',
      es: 'Un lenguaje de proposito general y orientado a objetos, la opcion tradicional para desarrollo nativo en Android.',
    },
  },
  {
    name: 'Kotlin',
    category: 'languages',
    icon: SiKotlin,
    color: '#7F52FF',
    description: {
      en: "A modern, concise language that's now the standard for native Android development, fully interoperable with Java.",
      es: 'Un lenguaje moderno y conciso que hoy es el estandar para desarrollo nativo en Android, totalmente interoperable con Java.',
    },
  },
  {
    name: 'Swift',
    category: 'languages',
    icon: SiSwift,
    color: '#F05138',
    description: {
      en: "Apple's modern language for building native iOS, macOS, and watchOS apps.",
      es: 'El lenguaje moderno de Apple para construir apps nativas de iOS, macOS y watchOS.',
    },
  },
  {
    name: 'TypeScript',
    category: 'languages',
    icon: SiTypescript,
    color: '#3178C6',
    description: {
      en: 'A statically typed superset of JavaScript that catches errors at compile time.',
      es: 'Un superconjunto de JavaScript con tipado estatico que detecta errores en tiempo de compilacion.',
    },
  },
  {
    name: 'Python',
    category: 'languages',
    icon: SiPython,
    color: '#3776AB',
    description: {
      en: 'A readable, general-purpose language popular for scripting, automation, and backend development.',
      es: 'Un lenguaje de proposito general y facil de leer, popular para scripts, automatizacion y desarrollo backend.',
    },
  },
  {
    name: 'HTML',
    category: 'languages',
    icon: SiHtml5,
    color: '#E34F26',
    description: {
      en: 'The standard markup language for structuring content on the web.',
      es: 'El lenguaje de marcado estandar para estructurar contenido en la web.',
    },
  },
  {
    name: 'CSS',
    category: 'languages',
    icon: SiCss,
    color: '#1572B6',
    description: {
      en: 'The stylesheet language used to control layout, color, and typography on the web.',
      es: 'El lenguaje de hojas de estilo usado para controlar el diseno, color y tipografia en la web.',
    },
  },
  {
    name: 'JSON',
    category: 'languages',
    icon: SiJson,
    color: '#71717A',
    description: {
      en: 'A lightweight, human-readable data format widely used for APIs and configuration.',
      es: 'Un formato de datos ligero y legible, muy usado en APIs y configuraciones.',
    },
  },

  // Tools
  {
    name: 'Android',
    category: 'tools',
    icon: SiAndroid,
    color: '#3DDC84',
    description: {
      en: "Google's mobile operating system and the most widely used platform for native mobile apps.",
      es: 'El sistema operativo movil de Google y la plataforma mas usada para apps moviles nativas.',
    },
  },
  {
    name: 'Kotlin Multiplatform',
    category: 'tools',
    icon: TbBrandKotlin,
    color: '#7F52FF',
    description: {
      en: 'A Kotlin technology for sharing code between Android and iOS — business logic, and with Compose Multiplatform, a single shared UI.',
      es: 'Una tecnologia de Kotlin para compartir codigo entre Android e iOS — logica de negocio y, mediante Compose Multiplatform, una unica UI compartida.',
    },
  },
  {
    name: 'Jetpack Compose',
    category: 'tools',
    icon: TbComponents,
    color: '#4285F4',
    description: {
      en: "Android's modern toolkit for building native UI declaratively in Kotlin.",
      es: 'El toolkit moderno de Android para construir UI nativa de forma declarativa en Kotlin.',
    },
  },
  {
    name: 'Hilt',
    category: 'tools',
    icon: TbPlugConnected,
    color: '#34A853',
    description: {
      en: 'A dependency injection library for Android, built on top of Dagger.',
      es: 'Una libreria de inyeccion de dependencias para Android, construida sobre Dagger.',
    },
  },
  {
    name: 'Room',
    category: 'tools',
    icon: SiSqlite,
    color: '#4A90D9',
    description: {
      en: "Android's persistence library, providing an abstraction layer over SQLite.",
      es: 'La libreria de persistencia de Android, que ofrece una capa de abstraccion sobre SQLite.',
    },
  },
  {
    name: 'Retrofit',
    category: 'tools',
    icon: TbApi,
    color: '#48B983',
    description: {
      en: 'A type-safe HTTP client for Android and Java/Kotlin that turns REST APIs into simple interface calls.',
      es: 'Un cliente HTTP con tipado seguro para Android y Java/Kotlin que convierte APIs REST en simples interfaces.',
    },
  },
  {
    name: 'Ktor',
    category: 'tools',
    icon: SiKtor,
    color: '#087CFA',
    description: {
      en: 'A Kotlin framework for asynchronous HTTP clients and servers, used as the network layer in Kotlin Multiplatform apps.',
      es: 'Un framework de Kotlin para clientes y servidores HTTP asincronos, usado como capa de red en apps Kotlin Multiplatform.',
    },
  },
  {
    name: 'Koin',
    category: 'tools',
    icon: TbPuzzle,
    color: '#7E57C2',
    description: {
      en: 'A lightweight dependency injection framework for Kotlin, with no code generation or reflection.',
      es: 'Un framework ligero de inyeccion de dependencias para Kotlin, sin generacion de codigo ni reflexion.',
    },
  },
  {
    name: 'Coroutines & Flow',
    category: 'tools',
    icon: TbWaveSine,
    color: '#7F52FF',
    description: {
      en: "Kotlin's tools for asynchronous programming and reactive streams, replacing callbacks with sequential, structured code.",
      es: 'Las herramientas de Kotlin para programacion asincrona y flujos reactivos, sustituyendo callbacks por codigo secuencial y estructurado.',
    },
  },
  {
    name: 'RxJava',
    category: 'tools',
    icon: SiReactivex,
    color: '#B7178C',
    description: {
      en: 'A reactive programming library for composing asynchronous, event-based operations on Android.',
      es: 'Una libreria de programacion reactiva para componer operaciones asincronas basadas en eventos en Android.',
    },
  },
  {
    name: 'greenDao',
    category: 'tools',
    icon: TbDatabase,
    color: '#4CAF50',
    description: {
      en: 'A lightweight ORM for Android that maps Java/Kotlin objects to a local SQLite database.',
      es: 'Un ORM ligero para Android que mapea objetos Java/Kotlin a una base de datos SQLite local.',
    },
  },
  {
    name: 'AngularJS',
    category: 'tools',
    icon: SiAngular,
    color: '#DD0031',
    description: {
      en: 'A JavaScript framework for building dynamic, single-page web applications.',
      es: 'Un framework de JavaScript para construir aplicaciones web dinamicas de una sola pagina.',
    },
  },
  {
    name: 'Django',
    category: 'tools',
    icon: SiDjango,
    color: '#2E7D52',
    description: {
      en: 'A high-level Python web framework for building secure, database-backed backends quickly.',
      es: 'Un framework web de Python de alto nivel para construir backends seguros y con base de datos rapidamente.',
    },
  },
  {
    name: 'MySQL',
    category: 'tools',
    icon: SiMysql,
    color: '#4479A1',
    description: {
      en: 'A widely used open-source relational database management system.',
      es: 'Un sistema de gestion de bases de datos relacionales de codigo abierto muy utilizado.',
    },
  },
  {
    name: 'SQLite',
    category: 'tools',
    icon: SiSqlite,
    color: '#3B82C4',
    description: {
      en: 'A lightweight, embedded relational database engine commonly used for local storage.',
      es: 'Un motor de base de datos relacional ligero e integrado, usado comunmente para almacenamiento local.',
    },
  },
  {
    name: 'Google Analytics',
    category: 'tools',
    icon: SiGoogleanalytics,
    color: '#E8710A',
    description: {
      en: "Google's platform for tracking and analyzing website and app traffic.",
      es: 'La plataforma de Google para rastrear y analizar el trafico de sitios web y apps.',
    },
  },
  {
    name: 'Firebase',
    category: 'tools',
    icon: SiFirebase,
    color: '#FFCA28',
    description: {
      en: "Google's backend-as-a-service platform for auth, cloud storage, realtime data, and push notifications.",
      es: 'La plataforma backend-as-a-service de Google para autenticacion, almacenamiento en la nube, datos en tiempo real y notificaciones push.',
    },
  },
  {
    name: 'Firebase App Distribution',
    category: 'tools',
    icon: SiFirebase,
    color: '#FFA000',
    description: {
      en: 'A Firebase service for distributing pre-release app builds to testers.',
      es: 'Un servicio de Firebase para distribuir versiones preliminares de apps a testers.',
    },
  },
  {
    name: 'Firebase Crashlytics',
    category: 'tools',
    icon: TbBug,
    color: '#FF6F00',
    description: {
      en: 'A Firebase tool for real-time crash reporting and diagnostics.',
      es: 'Una herramienta de Firebase para reportes de crashes y diagnosticos en tiempo real.',
    },
  },

  // AI
  {
    name: 'Claude Code',
    category: 'ai',
    icon: SiClaudecode,
    color: '#D97757',
    description: {
      en: "Anthropic's AI coding assistant, built for agentic pair-programming in the terminal.",
      es: 'El asistente de IA de Anthropic para programar, pensado para programacion en pareja agentica en la terminal.',
    },
  },
  {
    name: 'GitHub Copilot',
    category: 'ai',
    icon: SiGithubcopilot,
    color: '#8957E5',
    description: {
      en: 'An AI pair programmer that suggests code completions directly in the editor.',
      es: 'Un programador en pareja con IA que sugiere completado de codigo directamente en el editor.',
    },
  },
  {
    name: 'CodeRabbit',
    category: 'ai',
    icon: SiCoderabbit,
    color: '#F04E23',
    description: {
      en: 'An AI-powered code review tool that leaves feedback directly on pull requests.',
      es: 'Una herramienta de revision de codigo con IA que deja comentarios directamente en los pull requests.',
    },
  },
  {
    name: 'ChatGPT / OpenAI API',
    category: 'ai',
    icon: TbBrandOpenai,
    color: '#10A37F',
    description: {
      en: "OpenAI's conversational AI and API for building LLM-powered features.",
      es: 'La IA conversacional de OpenAI y su API para construir funcionalidades basadas en LLMs.',
    },
  },
  {
    name: 'Google Gemini',
    category: 'ai',
    icon: SiGooglegemini,
    color: '#4285F4',
    description: {
      en: "Google's family of multimodal AI models, available via API and app.",
      es: 'La familia de modelos de IA multimodal de Google, disponible via API y app.',
    },
  },

  // Methodologies
  {
    name: 'GitFlow',
    category: 'methodologies',
    icon: TbGitMerge,
    color: '#6366F1',
    description: {
      en: 'A branching model that organizes work around features, releases, and hotfixes.',
      es: 'Un modelo de ramificacion que organiza el trabajo en torno a funcionalidades, releases y hotfixes.',
    },
  },
  {
    name: 'Agile / Scrum',
    category: 'methodologies',
    icon: TbRefresh,
    color: '#6366F1',
    description: {
      en: 'An iterative framework for managing software projects in short, focused sprints.',
      es: 'Un marco de trabajo iterativo para gestionar proyectos de software en sprints cortos y enfocados.',
    },
  },
  {
    name: 'Clean Architecture / MVVM',
    category: 'methodologies',
    icon: TbStack2,
    color: '#6366F1',
    description: {
      en: 'An architectural pattern that separates concerns into layers for testable, maintainable code.',
      es: 'Un patron de arquitectura que separa responsabilidades en capas para un codigo testeable y mantenible.',
    },
  },
  {
    name: 'Code Review',
    category: 'methodologies',
    icon: TbGitPullRequest,
    color: '#6366F1',
    description: {
      en: "The practice of reviewing a peer's code before merging, to catch issues and share knowledge.",
      es: 'La practica de revisar el codigo de compañeros antes de fusionarlo, para detectar problemas y compartir conocimiento.',
    },
  },
  {
    name: 'CI/CD',
    category: 'methodologies',
    icon: TbRocket,
    color: '#6366F1',
    description: {
      en: 'Automated pipelines that build, test, and deploy code continuously.',
      es: 'Pipelines automatizados que compilan, prueban y despliegan codigo de forma continua.',
    },
  },
  {
    name: 'Unit Testing',
    category: 'methodologies',
    icon: TbTestPipe,
    color: '#6366F1',
    description: {
      en: 'Writing automated tests for individual units of code — my Kotlin Multiplatform apps carry hundreds of tests built with MockK and Ktor MockEngine.',
      es: 'Escribir tests automatizados para unidades individuales de codigo — mis apps en Kotlin Multiplatform incluyen cientos de tests construidos con MockK y Ktor MockEngine.',
    },
  },
  {
    name: 'Release Management',
    category: 'methodologies',
    icon: TbTags,
    color: '#6366F1',
    description: {
      en: 'The process of planning, scheduling, and controlling software releases.',
      es: 'El proceso de planificar, programar y controlar los lanzamientos de software.',
    },
  },
]
