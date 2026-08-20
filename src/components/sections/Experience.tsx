import { useTranslation } from 'react-i18next'
import { education, experience, languages } from '../../data/experience'
import { pickLocalized } from '../../utils/localized'
import RevealOnScroll from '../ui/RevealOnScroll'
import SectionHeading from '../ui/SectionHeading'
import TimelineItem from '../ui/TimelineItem'

export default function Experience() {
  const { t, i18n } = useTranslation()

  return (
    <section id="experience" className="section-container">
      <RevealOnScroll>
        <SectionHeading number="04">{t('experience.heading')}</SectionHeading>
      </RevealOnScroll>

      <RevealOnScroll className="mt-10">
        <div>
          {experience.map((entry, i) => (
            <TimelineItem key={entry.company} entry={entry} isLast={i === experience.length - 1} />
          ))}
        </div>
      </RevealOnScroll>

      {education.length > 0 && (
        <RevealOnScroll className="mt-12 border-t border-slate-200 pt-10 dark:border-slate-800">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
            {t('experience.education')}
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            {education.map((entry) => (
              <div key={entry.institution} className="text-sm">
                <p className="font-medium">{entry.institution}</p>
                <p className="text-slate-500 dark:text-slate-500">
                  {pickLocalized(entry.degree, i18n.language)} · {entry.period}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      )}

      {languages.length > 0 && (
        <RevealOnScroll className="mt-12 border-t border-slate-200 pt-10 dark:border-slate-800">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
            {t('experience.languages')}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {languages.map((entry) => (
              <span
                key={entry.name.en}
                className="rounded-full border border-slate-200 px-3 py-1.5 text-sm dark:border-slate-800"
              >
                {pickLocalized(entry.name, i18n.language)}{' '}
                <span className="text-slate-500 dark:text-slate-500">· {pickLocalized(entry.level, i18n.language)}</span>
              </span>
            ))}
          </div>
        </RevealOnScroll>
      )}
    </section>
  )
}
