import type { Profile } from '../types'

export const profile: Profile = {
  firstName: 'Ivan',
  lastName: 'Martinez',
  location: {
    en: 'Valencia, Spain',
    es: "Valencia, España",
  },
  age: 32,
  email: 'evansxe23@gmail.com',
  title: {
    en: 'Mobile App Developer',
    es: 'Desarrollador de Aplicaciones Móviles',
  },
  quote: {
    en: 'I like building software that solves real, everyday problems for people.',
    es: 'Me gusta construir software que resuelve problemas reales y cotidianos para la gente.',
  },
  photoUrl: '/images/avatar-photo.png',
  focusArea: {
    en: 'Native Android & iOS app development',
    es: 'Desarrollo nativo de apps Android y iOS',
  },
  yearsExperience: 10,
  extendedBio: {
    en: "I've spent the last ten years as a mobile developer, moving between independent projects and production apps for companies in Spain and abroad. I started out in 2016 building native Android apps and Cordova cross-platform apps for MedicalEGuides in Dublin, then spent time at TAG Ingenieros and Nubeser Soluciones picking up ERP/RFID software and backend work along the way. From late 2018 I worked at Diusframi building native apps for both Android (Java) and iOS (Swift), handling everything from new features to QA. The biggest chapter was almost six years, from 2020 to 2026, as the remote Android developer for Teamwire, a secure team-communication app based in Munich — leading refactors to a modern Kotlin/Jetpack Compose/Hilt/Room architecture and owning the Play Store release process on a codebase used by real teams every day. Throughout all of it, I kept building my own projects on the side as Devan Soft; today that's my main focus, now as a full stack developer — Football Coach App has passed 100,000 installs on Google Play, CultureLog is also live, my newer projects Tribo and DigiDex push into Kotlin Multiplatform, Compose Multiplatform, and Clean Architecture with real test coverage, and Tribo ships its own Django REST Framework backend. This portfolio site — built with React, TypeScript, and Tailwind — is one of those projects too.",
    es: 'Llevo diez años como desarrollador mobile, alternando entre proyectos propios y apps en producción para empresas en España y en el extranjero. Empecé en 2016 construyendo apps nativas de Android y apps multiplataforma con Cordova para MedicalEGuides en Dublín, y después pasé por TAG Ingenieros y Nubeser Soluciones, donde toqué software ERP/RFID y trabajo de backend. Desde finales de 2018 trabajé en Diusframi construyendo apps nativas tanto para Android (Java) como para iOS (Swift), encargándome de todo, desde nuevas funcionalidades hasta QA. El capítulo más largo fueron casi seis años, de 2020 a 2026, como desarrollador Android en remoto para Teamwire, una app de comunicación segura para equipos con sede en Múnich — liderando refactorizaciones hacia una arquitectura moderna con Kotlin, Jetpack Compose, Hilt y Room, y encargándome del proceso de publicación en Play Store en un codebase usado a diario por equipos reales. Durante todo ese tiempo seguí construyendo mis propios proyectos en paralelo como Devan Soft; hoy es mi ocupación principal, ahora como desarrollador full stack — Football Coach App ha superado las 100.000 instalaciones en Google Play, CultureLog también está publicada, mis proyectos más recientes Tribo y DigiDex avanzan hacia Kotlin Multiplatform, Compose Multiplatform y Clean Architecture con cobertura de tests real, y Tribo cuenta con su propio backend en Django REST Framework. Este portfolio — construido con React, TypeScript y Tailwind — es también uno de esos proyectos.',
  },
  problemsIEnjoy: {
    en: 'Getting native mobile UI to feel fast and effortless, working around platform quirks, and shipping a project end to end on my own — app, backend, and everything in between — as an independent developer.',
    es: 'Conseguir que la interfaz mobile nativa se sienta rápida y sin esfuerzo, lidiar con las particularidades de cada plataforma, y lanzar un proyecto de principio a fin por mi cuenta — app, backend y todo lo demás — como desarrollador independiente.',
  },
}
