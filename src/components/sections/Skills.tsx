import { useTranslation } from 'react-i18next'
import { skills } from '../../data/skills'
import type { SkillCategory } from '../../types'
import RevealOnScroll from '../ui/RevealOnScroll'
import SectionHeading from '../ui/SectionHeading'
import SkillCard from '../ui/SkillCard'

const CATEGORIES: { key: SkillCategory; labelKey: string }[] = [
  { key: 'languages', labelKey: 'skills.languages' },
  { key: 'tools', labelKey: 'skills.tools' },
  { key: 'ai', labelKey: 'skills.ai' },
  { key: 'methodologies', labelKey: 'skills.methodologies' },
]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="section-container">
      <RevealOnScroll>
        <SectionHeading number="02">{t('skills.heading')}</SectionHeading>
      </RevealOnScroll>

      <div className="mt-4 flex flex-col gap-14">
        {CATEGORIES.map(({ key, labelKey }) => {
          const items = skills.filter((skill) => skill.category === key)
          if (items.length === 0) return null

          return (
            <div key={key}>
              <RevealOnScroll>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
                  {t(labelKey)}
                </h3>
              </RevealOnScroll>

              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((skill, i) => (
                  <RevealOnScroll key={skill.name} delayMs={i * 60}>
                    <SkillCard skill={skill} />
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
