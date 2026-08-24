import type { EducationEntry, ExperienceEntry, LanguageEntry } from '../types'

export const experience: ExperienceEntry[] = [
  {
    company: 'Devan Studio (Independent)',
    period: '2016 — Present',
    color: '#6366F1',
    logoUrl: '/images/devan-studio-logo.svg',
    position: {
      en: 'Full Stack Developer',
      es: 'Desarrollador Full Stack',
    },
    description: {
      en: 'Independently design, build, and ship native Android and iOS apps end to end — from concept and architecture through to release on the App Store and Play Store. A sustained side practice alongside full-time roles, now continuing as my primary focus.',
      es: 'Diseño, desarrollo y publico de forma independiente aplicaciones nativas de Android e iOS de principio a fin, desde la concepción y la arquitectura hasta el lanzamiento en App Store y Play Store. Actividad constante en paralelo a mis puestos a tiempo completo, que ahora continúa como mi ocupación principal.',
    },
    tech: ['Kotlin', 'Java', 'Swift', 'Kotlin Multiplatform', 'Jetpack Compose', 'Python', 'Django'],
    projects: [
      { name: 'Football Coach App', tech: 'Android (Java)', slug: 'football-coach-app' },
      { name: 'CultureLog', tech: 'Android (Java) & iOS (Swift)', slug: 'culturelog' },
      { name: 'Tribo', tech: 'Kotlin Multiplatform & Django REST Framework', slug: 'tribo' },
      { name: 'DigiDex', tech: 'Android (Kotlin)', slug: 'digidex' },
      { name: 'Portfolio Website', tech: 'React & TypeScript', slug: 'portfolio-website' },
    ],
  },
  {
    company: 'Teamwire',
    period: 'Jul 2020 — May 2026',
    color: '#0891B2',
    logoUrl: '/images/teamwire-logo.svg',
    position: {
      en: 'Android Developer',
      es: 'Desarrollador Android',
    },
    description: {
      en: 'Remote Android developer for Teamwire, a secure enterprise messaging app based in Munich, Germany. Worked in a lean team of two to three developers — and independently for extended stretches — owning both the maintenance of existing features and the development of new ones from scratch. Led refactors to migrate legacy parts of the codebase to modern architecture (Kotlin, Jetpack Compose, Hilt, Room), and was the main point of responsibility for the Play Store release process and for distributing builds to enterprise clients via MDM.',
      es: 'Desarrollador Android en remoto para Teamwire, una app de mensajería segura para empresas con sede en Múnich, Alemania. Trabajé en un equipo reducido de dos a tres desarrolladores —y en solitario durante largos periodos— responsabilizándome tanto del mantenimiento de funcionalidades existentes como del desarrollo de otras nuevas desde cero. Lideré refactorizaciones para migrar partes antiguas del código a una arquitectura moderna (Kotlin, Jetpack Compose, Hilt, Room), y fui el principal responsable del proceso de publicación en Play Store y de la distribución de builds a clientes empresariales mediante MDM.',
    },
    tech: ['Kotlin', 'Java', 'Jetpack Compose', 'Hilt', 'Room'],
    projects: [{ name: 'Teamwire', tech: 'Android (Java & Kotlin)' }],
  },
  {
    company: 'Diusframi',
    period: 'Nov 2018 — Jul 2020',
    color: '#DB2777',
    logoUrl: '/images/diusframi-logo.webp',
    position: {
      en: 'Mobile App Developer',
      es: 'Desarrollador de Aplicaciones Móviles',
    },
    description: {
      en: 'Maintained and improved existing native Android (Java) and iOS (Swift) apps as part of a two-person development team. Because these apps were distributed directly to enterprise clients rather than through public app stores, the role also involved close coordination on release builds, optimization, and QA.',
      es: 'Mantenimiento y mejora de aplicaciones nativas ya existentes en Android (Java) e iOS (Swift), como parte de un equipo de dos desarrolladores. Al distribuirse estas apps directamente a clientes empresariales en lugar de a través de tiendas públicas, el puesto también implicó una coordinación estrecha en builds de lanzamiento, optimización y control de calidad (QA).',
    },
    tech: ['Java', 'Android', 'Swift', 'iOS', 'Kotlin'],
    projects: [
      { name: 'OrionMobile', tech: 'Android (Java)' },
      { name: 'KronoDID', tech: 'iOS (Swift)' },
      { name: 'DNI Reader', tech: 'Kotlin (Library)' },
      { name: 'QuickShop Lite', tech: 'Android (Java)' },
    ],
  },
  {
    company: 'Nubeser Soluciones',
    period: 'May 2018 — Oct 2018',
    color: '#D97706',
    logoUrl: '/images/nubeser-logo.webp',
    logoFilled: true,
    position: {
      en: 'Software Analyst & Developer',
      es: 'Analista Desarrollador de Software',
    },
    description: {
      en: 'Sole Android developer across multiple apps, combining hands-on development with product analysis to identify opportunities for reach and growth. Also handled requirements gathering, backend and web development on an in-house PHP/JavaScript framework, database management, and direct client support.',
      es: 'Único desarrollador Android en múltiples aplicaciones, combinando desarrollo práctico con análisis de producto para identificar oportunidades de alcance y crecimiento. También me encargué de la toma de requisitos, desarrollo backend y web con un framework propio en PHP y JavaScript, gestión de base de datos y soporte directo a clientes.',
    },
    tech: ['Java', 'Android', 'PHP', 'JavaScript', 'MySQL'],
    projects: [
      { name: 'Farma Activa', tech: 'Android (Java), JavaScript & PHP' },
      { name: 'Viventia', tech: 'Android (Java), JavaScript & PHP' },
      { name: 'Nubelist', tech: 'Android (Java)' },
      { name: 'Nubelist Time', tech: 'Android (Java)' },
      { name: 'Wasy', tech: 'PHP & JavaScript' },
      { name: 'Zaslook', tech: 'Xamarin, JavaScript & PHP' },
    ],
  },
  {
    company: 'TAG Ingenieros',
    period: 'Dec 2017 — Feb 2018',
    color: '#059669',
    logoUrl: '/images/tag-logo.webp',
    position: {
      en: 'Software Developer',
      es: 'Desarrollador de Software',
    },
    description: {
      en: 'Worked independently for a short stint building ERP software with RFID integration on the OpenXAVA framework (Java), alongside cross-platform app development with Cordova.',
      es: 'Trabajé de forma independiente durante un período breve desarrollando software ERP con integración RFID sobre el framework OpenXAVA (Java), además de aplicaciones multiplataforma con Cordova.',
    },
    tech: ['Cordova', 'OpenXAVA', 'RFID'],
    projects: [{ name: 'ITLRetail', tech: 'OpenXAVA' }],
  },
  {
    company: 'MedicalEGuides',
    period: 'May 2016 — Jun 2017',
    color: '#7C3AED',
    logoUrl: '/images/meg-logo.webp',
    position: {
      en: 'Software Developer',
      es: 'Desarrollador de Software',
    },
    description: {
      en: 'First professional developer role, at a company based in Dublin, Ireland. Built native Android apps in Java as the main focus, alongside cross-platform apps with Cordova, and contributed to a backend project built with Python and Django — a broad early introduction to mobile and web development.',
      es: 'Primer puesto profesional como desarrollador, en una empresa con sede en Dublín, Irlanda. Desarrollé aplicaciones nativas en Android con Java como foco principal, además de aplicaciones multiplataforma con Cordova, y contribuí a un proyecto de backend con Python y Django: una introducción amplia y temprana al desarrollo móvil y web.',
    },
    tech: ['Java', 'Android', 'Cordova', 'Django'],
    projects: [
      { name: 'The Irish Times', tech: 'Android (Java)' },
      { name: 'MyHome.ie', tech: 'Android (Java)' },
      { name: 'patientMpower', tech: 'Android (Java) & Django' },
      { name: 'MEG Audit Tools', tech: 'Ionic' },
      { name: 'MEG Support Tools', tech: 'Android (Java)' },
    ],
  },
]

export const education: EducationEntry[] = [
  {
    institution: 'BIG School',
    period: 'Mar 2026 — Aug 2026',
    degree: {
      en: "Master's Degree — Development with Artificial Intelligence",
      es: 'Máster — Desarrollo con Inteligencia Artificial',
    },
  },
  {
    institution: 'IES Dr. Lluís Simarro, Xàtiva (España)',
    period: '2014 — 2016',
    degree: {
      en: 'Higher Technician — Multi-Platform Application Development',
      es: 'Técnico Superior — Desarrollo de Aplicaciones Multiplataforma',
    },
  },
]

export const languages: LanguageEntry[] = [
  {
    name: { en: 'Spanish', es: 'Español' },
    level: { en: 'Native', es: 'Nativo' },
  },
  {
    name: { en: 'Catalan / Valencian', es: 'Catalán / Valenciano' },
    level: { en: 'Native', es: 'Nativo' },
  },
  {
    name: { en: 'English', es: 'Inglés' },
    level: { en: 'C2', es: 'C2' },
  },
]
