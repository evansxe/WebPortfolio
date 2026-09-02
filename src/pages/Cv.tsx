import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { education, experience, languages } from '../data/experience'
import { profile } from '../data/profile'
import { skills } from '../data/skills'
import type { SkillCategory } from '../types'
import { withBase } from '../utils/base'
import { pickLocalized } from '../utils/localized'

const LINKEDIN_URL = 'https://www.linkedin.com/in/ivan-mart%C3%ADnez-company-03a4b7113/'
const GITHUB_URL = 'https://github.com/evansxe'
const SITE_URL = 'https://portfolio.devanforge.com/'

const SKILL_CATEGORIES: { key: SkillCategory; labelKey: string }[] = [
  { key: 'languages', labelKey: 'skills.languages' },
  { key: 'mobile', labelKey: 'skills.mobile' },
  { key: 'web', labelKey: 'skills.web' },
  { key: 'cloud', labelKey: 'skills.cloud' },
  { key: 'ai', labelKey: 'skills.ai' },
  { key: 'methodologies', labelKey: 'skills.methodologies' },
]

export default function Cv() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  useEffect(() => {
    const timer = setTimeout(() => window.print(), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="no-print sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-3 backdrop-blur">
        <Link to="/" className="text-sm font-medium text-accent">
          {t('cv.backToPortfolio')}
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-dark"
        >
          {t('cv.print')}
        </button>
      </div>

      <main className="mx-auto max-w-3xl px-8 py-10 print:px-0 print:py-0">
        <header className="flex items-start gap-6 border-b border-slate-200 pb-6">
          <img
            src={withBase(profile.photoUrl)}
            alt=""
            className="h-24 w-24 shrink-0 rounded-full object-cover print:h-20 print:w-20"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {profile.firstName} {profile.lastName}
            </h1>
            <p className="mt-1 text-lg text-slate-600">{pickLocalized(profile.title, lang)}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
              <span>{pickLocalized(profile.location, lang)}</span>
              <a href={`mailto:${profile.email}`} className="text-accent">
                {profile.email}
              </a>
              <a href={LINKEDIN_URL} className="text-accent">
                LinkedIn
              </a>
              <a href={GITHUB_URL} className="text-accent">
                GitHub
              </a>
            </div>
          </div>
        </header>

        <section className="mt-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('cv.summary')}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{pickLocalized(profile.extendedBio, lang)}</p>
        </section>

        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('skills.heading')}</h2>
          <div className="mt-2 flex flex-col gap-2">
            {SKILL_CATEGORIES.map(({ key, labelKey }) => {
              const items = skills.filter((skill) => skill.category === key)
              if (items.length === 0) return null

              return (
                <p key={key} className="text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">{t(labelKey)}: </span>
                  {items.map((skill) => skill.name).join(', ')}
                </p>
              )
            })}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('experience.heading')}</h2>
          <div className="mt-3 flex flex-col gap-5">
            {experience.map((entry) => (
              <div key={entry.company} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {pickLocalized(entry.position, lang)} · {entry.company}
                  </h3>
                  <span className="text-xs font-medium text-slate-500">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm text-slate-700">{pickLocalized(entry.description, lang)}</p>
                <p className="mt-1 text-xs text-slate-500">{entry.tech.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('experience.education')}</h2>
          <div className="mt-3 flex flex-col gap-2">
            {education.map((entry) => (
              <div key={entry.institution} className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-sm text-slate-900">
                  <span className="font-semibold">{pickLocalized(entry.degree, lang)}</span> · {entry.institution}
                </p>
                <span className="text-xs font-medium text-slate-500">{entry.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('experience.languages')}</h2>
          <p className="mt-2 text-sm text-slate-700">
            {languages.map((entry) => `${pickLocalized(entry.name, lang)} (${pickLocalized(entry.level, lang)})`).join(' · ')}
          </p>
        </section>

        <footer className="mt-10 border-t border-slate-200 pt-4 text-center text-xs text-slate-400">
          {t('cv.fullPortfolio')} {SITE_URL}
        </footer>
      </main>
    </div>
  )
}
