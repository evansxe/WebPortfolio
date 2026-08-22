import { useTranslation } from 'react-i18next'
import { Link, Navigate, useParams } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import ThemeToggle from '../components/ui/ThemeToggle'
import LanguageSwitch from '../components/ui/LanguageSwitch'
import TechChip from '../components/ui/TechChip'
import { projects } from '../data/projects'
import { withBase } from '../utils/base'
import { pickLocalized } from '../utils/localized'

const STORE_LABELS: Record<string, string> = {
  android: 'Google Play',
  ios: 'App Store',
  web: 'Web',
  github: 'GitHub',
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { t, i18n } = useTranslation()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <Link to="/#projects" className="text-sm font-medium text-accent dark:text-accent-light">
            ← {t('projects.backToProjects')}
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-center gap-4">
          <img src={withBase(project.logoUrl)} alt="" className="h-14 w-14 rounded-xl" />
          <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        </div>

        <p className="mt-6 text-slate-600 dark:text-slate-400">
          {pickLocalized(project.fullDescription, i18n.language)}
        </p>

        <div className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
            {t('projects.techUsed')}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <TechChip key={tech} label={tech} />
            ))}
          </div>
        </div>

        {project.achievements.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
              {t('projects.achievements')}
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {project.achievements.map((achievement) => (
                <li key={achievement.en} className="flex gap-2 text-sm">
                  <span aria-hidden="true">🏆</span>
                  {pickLocalized(achievement, i18n.language)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.storeLinks.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
              {t('projects.availableOn')}
            </h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.storeLinks.map((link) => (
                <a
                  key={link.store}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800"
                >
                  {STORE_LABELS[link.store] ?? link.store}
                </a>
              ))}
            </div>
          </div>
        )}

        {project.screenshots.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
              {t('projects.screenshots')}
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {project.screenshots.map((src) => (
                <img
                  key={src}
                  src={withBase(src)}
                  alt=""
                  loading="lazy"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800"
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
