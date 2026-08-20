import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import type { SkillItem } from '../../types'
import { hexToRgba } from '../../utils/color'
import { pickLocalized } from '../../utils/localized'

export default function SkillCard({ skill }: { skill: SkillItem }) {
  const { i18n } = useTranslation()
  const Icon = skill.icon

  const style = {
    '--skill-color': skill.color,
    '--skill-color-soft': hexToRgba(skill.color, 0.12),
  } as CSSProperties

  return (
    <div
      style={style}
      className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--skill-color)] hover:shadow-[0_16px_40px_-24px_var(--skill-color)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-[var(--skill-color)] dark:hover:shadow-none"
    >
      <span
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition-colors duration-300 group-hover:bg-[var(--skill-color-soft)] dark:bg-slate-800"
        style={{ color: skill.color }}
        aria-hidden="true"
      >
        <Icon size={22} />
      </span>
      <h4 className="text-base font-semibold">{skill.name}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400">{pickLocalized(skill.description, i18n.language)}</p>
    </div>
  )
}
