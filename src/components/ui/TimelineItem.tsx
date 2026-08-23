import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { ExperienceEntry } from '../../types'
import { withBase } from '../../utils/base'
import { getInitials } from '../../utils/initials'
import { pickLocalized } from '../../utils/localized'
import TechChip from './TechChip'

interface TimelineItemProps {
  entry: ExperienceEntry
  isLast?: boolean
}

export default function TimelineItem({ entry, isLast = false }: TimelineItemProps) {
  const { t, i18n } = useTranslation()

  return (
    <div className="relative pb-10 pl-16 last:pb-0">
      {entry.logoUrl ? (
        <span
          className={
            entry.logoFilled
              ? 'absolute left-0 top-0 flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-700'
              : 'absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700'
          }
          aria-hidden="true"
        >
          <img
            src={withBase(entry.logoUrl)}
            alt=""
            className={entry.logoFilled ? 'h-full w-full object-cover' : 'h-full w-full object-contain'}
          />
        </span>
      ) : (
        <span
          className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold text-white shadow-sm"
          style={{ backgroundColor: entry.color }}
          aria-hidden="true"
        >
          {getInitials(entry.company)}
        </span>
      )}

      {!isLast && (
        <span
          className="absolute left-5 top-10 w-px bg-slate-200 dark:bg-slate-800"
          style={{ height: 'calc(100% - 2.5rem)' }}
        />
      )}

      <p className="pt-1 text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-light">
        {entry.period}
      </p>
      <h3 className="mt-1 text-lg font-semibold">
        {pickLocalized(entry.position, i18n.language)} · {entry.company}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        {pickLocalized(entry.description, i18n.language)}
      </p>

      {entry.projects && entry.projects.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-600">
            {t('experience.projects')}
          </p>
          <ul className="mt-1.5 flex flex-col gap-1">
            {entry.projects.map((project) => (
              <li key={project.name} className="text-sm text-slate-600 dark:text-slate-400">
                {project.slug ? (
                  <Link
                    to={`/projects/${project.slug}`}
                    className="font-medium text-accent hover:underline dark:text-accent-light"
                  >
                    {project.name}
                  </Link>
                ) : (
                  <span className="font-medium">{project.name}</span>
                )}
                {project.tech && <span className="text-slate-500 dark:text-slate-500"> — {project.tech}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {entry.tech.map((tech) => (
          <TechChip key={tech} label={tech} />
        ))}
      </div>
    </div>
  )
}
