import { useTranslation } from 'react-i18next'
import { profile } from '../../data/profile'
import { pickLocalized } from '../../utils/localized'
import RevealOnScroll from '../ui/RevealOnScroll'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  const { t, i18n } = useTranslation()

  return (
    <section id="about" className="section-container">
      <RevealOnScroll>
        <SectionHeading number="01">{t('about.heading')}</SectionHeading>
        <p className="mt-6 max-w-3xl text-slate-600 dark:text-slate-400">
          {pickLocalized(profile.extendedBio, i18n.language)}
        </p>

        <dl className="mt-10 flex flex-col divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
            <dt className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500 sm:w-48">
              {t('about.focusArea')}
            </dt>
            <dd className="text-sm font-medium">{pickLocalized(profile.focusArea, i18n.language)}</dd>
          </div>
          <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
            <dt className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500 sm:w-48">
              {t('about.yearsExperience')}
            </dt>
            <dd className="text-sm font-medium">{profile.yearsExperience}+</dd>
          </div>
          <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
            <dt className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500 sm:w-48">
              {t('about.problemsIEnjoy')}
            </dt>
            <dd className="text-sm font-medium">{pickLocalized(profile.problemsIEnjoy, i18n.language)}</dd>
          </div>
        </dl>
      </RevealOnScroll>
    </section>
  )
}
