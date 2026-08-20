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
    en: 'I turn complicated problems into interfaces people enjoy using.',
    es: 'Convierto problemas complicados en interfaces que la gente disfruta usar.',
  },
  photoUrl: '/images/avatar-photo.png',
  focusArea: {
    en: 'Native Android & iOS app development',
    es: 'Desarrollo nativo de apps Android y iOS',
  },
  yearsExperience: 10,
  extendedBio: {
    en: 'I am a mobile developer with ten years of experience building native Android and iOS apps, from independent side projects to production apps for companies in Spain and abroad — including two years building the Android client for Teamwire, a team communication app, remotely for a company based in Munich. I have also worked on backend and web pieces along the way (Django, PHP) when a project needed them. These days I am back to building my own apps independently under Devan Soft.',
    es: 'Soy desarrollador mobile con diez años de experiencia construyendo apps nativas de Android e iOS, desde proyectos propios hasta apps en produccion para empresas en España y en el extranjero — incluyendo dos años construyendo el cliente Android de Teamwire, una app de comunicacion para equipos, en remoto para una empresa con sede en Múnich. Tambien he trabajado en piezas de backend y web (Django, PHP) cuando un proyecto lo ha necesitado. Actualmente estoy de vuelta construyendo mis propias apps de forma independiente bajo Devan Soft.',
  },
  problemsIEnjoy: {
    en: 'Getting native mobile UI to feel fast and effortless, working around platform quirks, and shipping an app end to end on my own as an independent developer.',
    es: 'Conseguir que la interfaz mobile nativa se sienta rapida y sin esfuerzo, lidiar con las particularidades de cada plataforma, y lanzar una app de principio a fin por mi cuenta como desarrollador independiente.',
  },
}
