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
    en: "I've spent the last ten years as a mobile developer, moving between independent projects and production apps for companies in Spain and abroad. I started out in 2016 building native Android apps and Cordova cross-platform apps for MedicalEGuides in Dublin, then spent time at TAG Ingenieros and Nubeser Soluciones picking up ERP/RFID software and backend work along the way. From late 2018 I worked at Diusframi building native apps for both Android (Java) and iOS (Swift), handling everything from new features to QA. The biggest chapter was almost six years, from 2020 to 2026, as the remote Android developer for Teamwire, a secure team-communication app based in Munich — working in Kotlin and Java with Jetpack Compose, Hilt, and Room on a codebase used by real teams every day. Throughout all of it, I kept building my own apps on the side under Devan Soft; today that's my main focus — Football Coach App has passed 100,000 installs on Google Play, CultureLog is also live, and my newer side projects, Tribo and DigiDex, push into Kotlin Multiplatform, Compose Multiplatform, and Clean Architecture with real test coverage.",
    es: 'Llevo diez años como desarrollador mobile, alternando entre proyectos propios y apps en producción para empresas en España y en el extranjero. Empecé en 2016 construyendo apps nativas de Android y apps multiplataforma con Cordova para MedicalEGuides en Dublín, y después pasé por TAG Ingenieros y Nubeser Soluciones, donde toqué software ERP/RFID y trabajo de backend. Desde finales de 2018 trabajé en Diusframi construyendo apps nativas tanto para Android (Java) como para iOS (Swift), encargándome de todo, desde nuevas funcionalidades hasta QA. El capítulo más largo fueron casi seis años, de 2020 a 2026, como desarrollador Android en remoto para Teamwire, una app de comunicación segura para equipos con sede en Múnich — trabajando en Kotlin y Java con Jetpack Compose, Hilt y Room en un codebase usado a diario por equipos reales. Durante todo ese tiempo seguí construyendo mis propias apps en paralelo bajo Devan Soft; hoy es mi ocupación principal — Football Coach App ha superado las 100.000 instalaciones en Google Play, CultureLog también está publicada, y mis proyectos personales más recientes, Tribo y DigiDex, avanzan hacia Kotlin Multiplatform, Compose Multiplatform y Clean Architecture con cobertura de tests real.',
  },
  problemsIEnjoy: {
    en: 'Getting native mobile UI to feel fast and effortless, working around platform quirks, and shipping a project end to end on my own — app, backend, and everything in between — as an independent developer.',
    es: 'Conseguir que la interfaz mobile nativa se sienta rápida y sin esfuerzo, lidiar con las particularidades de cada plataforma, y lanzar un proyecto de principio a fin por mi cuenta — app, backend y todo lo demás — como desarrollador independiente.',
  },
}
