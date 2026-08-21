import type { EducationEntry, ExperienceEntry, LanguageEntry } from '../types'

export const experience: ExperienceEntry[] = [
  {
    company: 'Devan Soft (Independent)',
    period: '2016 — Present',
    color: '#6366F1',
    position: {
      en: 'Independent App Developer',
      es: 'Desarrollador de Apps Independiente',
    },
    description: {
      en: 'Design, build, and ship my own native Android and iOS apps end to end, from idea to release. Ongoing alongside (and now after) full-time roles.',
      es: 'Diseño, construyo y publico mis propias apps nativas de Android e iOS de principio a fin, desde la idea hasta el lanzamiento. En marcha en paralelo (y ahora tras) mis puestos a tiempo completo.',
    },
    tech: ['Kotlin', 'Java', 'Swift', 'Kotlin Multiplatform', 'Jetpack Compose', 'Python', 'Django'],
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
      en: 'Remote role building the Android client for Teamwire, a secure team communication app, for a company based in Munich, Germany. Worked on the app in Kotlin and Java with Jetpack Compose, Hilt for dependency injection, and Room for local persistence.',
      es: 'Puesto en remoto construyendo el cliente Android de Teamwire, una app de comunicacion segura para equipos, para una empresa con sede en Múnich, Alemania. Trabaje en la app con Kotlin y Java, usando Jetpack Compose, Hilt para inyeccion de dependencias y Room para persistencia local.',
    },
    tech: ['Kotlin', 'Java', 'Jetpack Compose', 'Hilt', 'Room'],
  },
  {
    company: 'Diusframi',
    period: 'Nov 2018 — Jul 2020',
    color: '#DB2777',
    logoUrl: '/images/diusframi-logo.jpg',
    position: {
      en: 'Mobile App Developer',
      es: 'Desarrollador de Aplicaciones Móviles',
    },
    description: {
      en: 'Developed native mobile apps for both Android (Java) and iOS (Swift). Optimized, maintained, and improved existing apps, and handled QA.',
      es: 'Desarrollo de aplicaciones moviles nativas tanto para Android (Java) como para iOS (Swift). Optimizacion, mantenimiento y mejora de aplicaciones ya desarrolladas, y control de calidad (QA).',
    },
    tech: ['Java', 'Android', 'Swift', 'iOS', 'Kotlin'],
  },
  {
    company: 'Nubeser Soluciones',
    period: 'May 2018 — Oct 2018',
    color: '#D97706',
    logoUrl: '/images/nubeser-logo.png',
    logoFilled: true,
    position: {
      en: 'Software Analyst & Developer',
      es: 'Analista Desarrollador de Software',
    },
    description: {
      en: 'Requirements analysis and native Android development, plus backend and web work with an in-house PHP/JavaScript framework, database management, and client support.',
      es: 'Analisis y toma de requisitos y desarrollo de aplicaciones nativas en Android, ademas de backend y web con un framework propio en PHP y JavaScript, gestion de base de datos y soporte a clientes.',
    },
    tech: ['Java', 'Android', 'PHP', 'JavaScript', 'MySQL'],
  },
  {
    company: 'TAG Ingenieros',
    period: 'Dec 2017 — Feb 2018',
    color: '#059669',
    logoUrl: '/images/tag-logo.png',
    position: {
      en: 'Software Developer',
      es: 'Desarrollador de Software',
    },
    description: {
      en: 'Built cross-platform apps with Cordova and ERP software with RFID technology on the OpenXAVA framework.',
      es: 'Desarrollo de aplicaciones multiplataforma en Cordova y software ERP con tecnologia RFID sobre el framework OpenXAVA.',
    },
    tech: ['Cordova', 'OpenXAVA', 'RFID'],
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
      en: 'Developed native Android apps and cross-platform apps with Cordova, plus built and managed backends with Django, at a company based in Dublin, Ireland.',
      es: 'Desarrollo de aplicaciones nativas en Android, aplicaciones multiplataforma en Cordova, y creacion y gestion de backends con Django, en una empresa con sede en Dublin, Irlanda.',
    },
    tech: ['Java', 'Android', 'Cordova', 'Django'],
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
