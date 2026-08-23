import type { IconType } from 'react-icons'

export interface LocalizedText {
  en: string
  es: string
}

export interface Profile {
  firstName: string
  lastName: string
  location: LocalizedText
  age: number
  email: string
  title: LocalizedText
  quote: LocalizedText
  photoUrl: string
  focusArea: LocalizedText
  yearsExperience: number
  extendedBio: LocalizedText
  problemsIEnjoy: LocalizedText
}

export type StoreLink = {
  store: 'android' | 'ios' | 'web' | 'github'
  url: string
}

export interface Project {
  slug: string
  title: string
  logoUrl: string
  color: string
  shortDescription: LocalizedText
  fullDescription: LocalizedText
  tech: string[]
  storeLinks: StoreLink[]
  achievements: LocalizedText[]
  screenshots: string[]
}

export type SkillCategory = 'languages' | 'mobile' | 'web' | 'cloud' | 'ai' | 'methodologies'

export interface SkillItem {
  name: string
  category: SkillCategory
  icon: IconType
  color: string
  description: LocalizedText
}

export interface ExperienceProject {
  name: string
  tech?: string
  /** Set when this project also has a full case study in the Projects section. */
  slug?: string
}

export interface ExperienceEntry {
  company: string
  period: string
  color: string
  logoUrl?: string
  /** Set when the logo image already fills its own background (no padding/white tile needed). */
  logoFilled?: boolean
  position: LocalizedText
  description: LocalizedText
  tech: string[]
  projects?: ExperienceProject[]
}

export interface EducationEntry {
  institution: string
  period: string
  degree: LocalizedText
}

export interface LanguageEntry {
  name: LocalizedText
  level: LocalizedText
}
