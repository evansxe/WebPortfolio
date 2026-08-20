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
  SiMysql,
  SiPython,
  SiSqlite,
  SiSwift,
  SiTypescript,
} from 'react-icons/si'
import {
  TbBrandKotlin,
  TbBrandOpenai,
  TbBug,
  TbCoffee,
  TbComponents,
  TbGitMerge,
  TbGitPullRequest,
  TbPlugConnected,
  TbRefresh,
  TbRocket,
  TbStack2,
  TbTags,
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
      en: 'My core language for native Android development across most of my professional roles.',
      es: 'Mi lenguaje principal para desarrollo nativo en Android en la mayoria de mis puestos profesionales.',
    },
  },
  {
    name: 'Kotlin',
    category: 'languages',
    icon: SiKotlin,
    color: '#7F52FF',
    description: {
      en: 'Modern native Android development, including my most recent role building Teamwire\'s Android app.',
      es: 'Desarrollo nativo moderno en Android, incluyendo mi puesto mas reciente construyendo la app Android de Teamwire.',
    },
  },
  {
    name: 'Swift',
    category: 'languages',
    icon: SiSwift,
    color: '#F05138',
    description: {
      en: 'Native iOS development for apps and side projects that needed an Apple platform version.',
      es: 'Desarrollo nativo de iOS para apps y proyectos propios que necesitaban una version para Apple.',
    },
  },
  {
    name: 'TypeScript',
    category: 'languages',
    icon: SiTypescript,
    color: '#3178C6',
    description: {
      en: 'Used for web tooling and side projects that benefit from static typing.',
      es: 'La uso para herramientas web y proyectos propios que se benefician del tipado estatico.',
    },
  },
  {
    name: 'Python',
    category: 'languages',
    icon: SiPython,
    color: '#3776AB',
    description: {
      en: 'Scripting and backend work, mainly paired with Django on past projects.',
      es: 'Scripts y trabajo de backend, principalmente junto a Django en proyectos anteriores.',
    },
  },
  {
    name: 'HTML',
    category: 'languages',
    icon: SiHtml5,
    color: '#E34F26',
    description: {
      en: 'Markup for the web pages and hybrid app views I have built over the years.',
      es: 'Marcado para las paginas web y vistas de apps hibridas que he construido a lo largo de los años.',
    },
  },
  {
    name: 'CSS',
    category: 'languages',
    icon: SiCss,
    color: '#1572B6',
    description: {
      en: 'Styling for web dashboards and hybrid app screens built earlier in my career.',
      es: 'Estilos para paneles web y pantallas de apps hibridas construidas al inicio de mi carrera.',
    },
  },
  {
    name: 'JSON',
    category: 'languages',
    icon: SiJson,
    color: '#71717A',
    description: {
      en: 'The everyday format for API payloads and app configuration.',
      es: 'El formato habitual para las respuestas de API y la configuracion de las apps.',
    },
  },

  // Tools
  {
    name: 'Android',
    category: 'tools',
    icon: SiAndroid,
    color: '#3DDC84',
    description: {
      en: 'The platform I have shipped the most apps on, from personal projects to production apps.',
      es: 'La plataforma en la que mas apps he lanzado, desde proyectos propios hasta apps en produccion.',
    },
  },
  {
    name: 'Kotlin Multiplatform',
    category: 'tools',
    icon: TbBrandKotlin,
    color: '#7F52FF',
    description: {
      en: 'Sharing UI and business logic between Android and iOS from one codebase, used to build Tribo.',
      es: 'Compartir UI y logica de negocio entre Android e iOS desde una unica base de codigo, usado para construir Tribo.',
    },
  },
  {
    name: 'Jetpack Compose',
    category: 'tools',
    icon: TbComponents,
    color: '#4285F4',
    description: {
      en: "Android's modern declarative UI toolkit, used to build Teamwire's Android screens.",
      es: 'El toolkit moderno y declarativo de UI de Android, usado para construir las pantallas de la app de Teamwire.',
    },
  },
  {
    name: 'Hilt',
    category: 'tools',
    icon: TbPlugConnected,
    color: '#34A853',
    description: {
      en: 'Dependency injection for Android, used on a production app with a large codebase.',
      es: 'Inyeccion de dependencias para Android, usada en una app en produccion con una base de codigo grande.',
    },
  },
  {
    name: 'Room',
    category: 'tools',
    icon: SiSqlite,
    color: '#4A90D9',
    description: {
      en: "Local persistence on Android, layered on top of SQLite for offline-friendly apps.",
      es: 'Persistencia local en Android, sobre SQLite, para apps que funcionan bien sin conexion.',
    },
  },
  {
    name: 'AngularJS',
    category: 'tools',
    icon: SiAngular,
    color: '#DD0031',
    description: {
      en: 'Front-end framework used for admin dashboards and web tooling on past projects.',
      es: 'Framework de frontend usado en paneles de administracion y herramientas web en proyectos anteriores.',
    },
  },
  {
    name: 'Django',
    category: 'tools',
    icon: SiDjango,
    color: '#2E7D52',
    description: {
      en: 'Built and maintained REST backends for mobile apps with Django on a past job in Dublin.',
      es: 'Construi y mantuve backends REST para apps mobile con Django en un trabajo anterior en Dublin.',
    },
  },
  {
    name: 'MySQL',
    category: 'tools',
    icon: SiMysql,
    color: '#4479A1',
    description: {
      en: 'Relational database used on the backend side of several past projects.',
      es: 'Base de datos relacional usada en el backend de varios proyectos anteriores.',
    },
  },
  {
    name: 'SQLite',
    category: 'tools',
    icon: SiSqlite,
    color: '#3B82C4',
    description: {
      en: 'Local, on-device storage for native Android apps.',
      es: 'Almacenamiento local en el dispositivo para apps nativas de Android.',
    },
  },
  {
    name: 'Google Analytics',
    category: 'tools',
    icon: SiGoogleanalytics,
    color: '#E8710A',
    description: {
      en: 'Tracking app and web usage to understand user behavior and inform product decisions.',
      es: 'Seguimiento del uso de apps y web para entender el comportamiento de los usuarios y guiar decisiones de producto.',
    },
  },
  {
    name: 'Firebase App Distribution',
    category: 'tools',
    icon: SiFirebase,
    color: '#FFA000',
    description: {
      en: 'Distributing beta builds to testers before releasing to the app stores.',
      es: 'Distribucion de builds beta a testers antes de publicar en las tiendas de apps.',
    },
  },
  {
    name: 'Firebase Crashlytics',
    category: 'tools',
    icon: TbBug,
    color: '#FF6F00',
    description: {
      en: 'Monitoring crash reports in production to catch and fix issues quickly.',
      es: 'Monitorizacion de crashes en produccion para detectar y solucionar problemas rapidamente.',
    },
  },

  // AI
  {
    name: 'Claude Code',
    category: 'ai',
    icon: SiClaudecode,
    color: '#D97757',
    description: {
      en: 'My daily AI pair-programming tool for planning changes, writing code, and reviewing diffs.',
      es: 'Mi herramienta diaria de programacion en pareja con IA para planear cambios, escribir codigo y revisar diffs.',
    },
  },
  {
    name: 'GitHub Copilot',
    category: 'ai',
    icon: SiGithubcopilot,
    color: '#8957E5',
    description: {
      en: 'In-editor completion for repetitive code, boilerplate, and test scaffolding.',
      es: 'Autocompletado en el editor para codigo repetitivo, boilerplate y estructura de tests.',
    },
  },
  {
    name: 'CodeRabbit',
    category: 'ai',
    icon: SiCoderabbit,
    color: '#F04E23',
    description: {
      en: 'Automated AI code review on pull requests, catching issues before a human review pass.',
      es: 'Revision de codigo automatizada con IA en los pull requests, detectando problemas antes de la revision humana.',
    },
  },
  {
    name: 'ChatGPT / OpenAI API',
    category: 'ai',
    icon: TbBrandOpenai,
    color: '#10A37F',
    description: {
      en: 'General-purpose LLM use and API integration, from research to adding AI features to apps.',
      es: 'Uso general de LLMs e integracion de API, desde investigacion hasta anadir funcionalidades de IA a apps.',
    },
  },
  {
    name: 'Google Gemini',
    category: 'ai',
    icon: SiGooglegemini,
    color: '#4285F4',
    description: {
      en: "Google's model family, used via API and the Gemini app.",
      es: 'La familia de modelos de Google, usada a traves de la API y la app de Gemini.',
    },
  },

  // Methodologies
  {
    name: 'GitFlow',
    category: 'methodologies',
    icon: TbGitMerge,
    color: '#6366F1',
    description: {
      en: 'Branching and release workflow I use to keep feature work, releases, and hotfixes organized.',
      es: 'Flujo de trabajo de ramas y lanzamientos que uso para mantener organizado el desarrollo de funcionalidades, releases y hotfixes.',
    },
  },
  {
    name: 'Agile / Scrum',
    category: 'methodologies',
    icon: TbRefresh,
    color: '#6366F1',
    description: {
      en: 'Sprint planning, standups, and iterative delivery across most of the teams I have worked with.',
      es: 'Planificacion de sprints, standups y entrega iterativa en la mayoria de los equipos en los que he trabajado.',
    },
  },
  {
    name: 'Clean Architecture / MVVM',
    category: 'methodologies',
    icon: TbStack2,
    color: '#6366F1',
    description: {
      en: 'Layered, testable Android architecture, paired with Compose, Hilt, and Room on production apps.',
      es: 'Arquitectura Android en capas y testeable, combinada con Compose, Hilt y Room en apps en produccion.',
    },
  },
  {
    name: 'Code Review',
    category: 'methodologies',
    icon: TbGitPullRequest,
    color: '#6366F1',
    description: {
      en: 'Peer review on every pull request to catch issues early and keep the codebase consistent.',
      es: 'Revision entre compañeros en cada pull request para detectar problemas a tiempo y mantener el codigo consistente.',
    },
  },
  {
    name: 'CI/CD',
    category: 'methodologies',
    icon: TbRocket,
    color: '#6366F1',
    description: {
      en: 'Automated build, test, and release pipelines for shipping mobile apps with confidence.',
      es: 'Pipelines automatizados de build, test y release para lanzar apps mobile con confianza.',
    },
  },
  {
    name: 'Release Management',
    category: 'methodologies',
    icon: TbTags,
    color: '#6366F1',
    description: {
      en: 'Versioning, tagging, and publishing app releases to Google Play and the App Store.',
      es: 'Versionado, etiquetado y publicacion de releases en Google Play y la App Store.',
    },
  },
]
