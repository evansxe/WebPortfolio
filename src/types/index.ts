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
  store: 'android' | 'ios' | 'web'
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

export type SkillCategory = 'languages' | 'tools' | 'ai' | 'methodologies'

export interface SkillItem {
  name: string
  category: SkillCategory
  icon: IconType
  color: string
  description: LocalizedText
}

export interface ExperienceEntry {
  company: string
  period: string
  color: string
  position: LocalizedText
  description: LocalizedText
  tech: string[]
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
