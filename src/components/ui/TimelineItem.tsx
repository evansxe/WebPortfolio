import { useTranslation } from 'react-i18next'
import type { ExperienceEntry } from '../../types'
import { getInitials } from '../../utils/initials'
import { pickLocalized } from '../../utils/localized'
import TechChip from './TechChip'

interface TimelineItemProps {
  entry: ExperienceEntry
  isLast?: boolean
}

export default function TimelineItem({ entry, isLast = false }: TimelineItemProps) {
  const { i18n } = useTranslation()

  return (
    <div className="relative pb-10 pl-16 last:pb-0">
      <span
        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold text-white shadow-sm"
        style={{ backgroundColor: entry.color }}
        aria-hidden="true"
      >
        {getInitials(entry.company)}
      </span>

      {!isLast && (
        <span
          className="absolute left-5 top-10 w-px"
          style={{
            height: 'calc(100% - 2.5rem)',
            background: `linear-gradient(to bottom, ${entry.color}, transparent)`,
          }}
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
      <div className="mt-3 flex flex-wrap gap-2">
        {entry.tech.map((tech) => (
          <TechChip key={tech} label={tech} />
        ))}
      </div>
    </div>
  )
}
