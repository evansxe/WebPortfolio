import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import type { SkillItem } from '../../types'
import { hexToRgba } from '../../utils/color'
import { pickLocalized } from '../../utils/localized'

export default function SkillCard({ skill }: { skill: SkillItem }) {
  const { i18n } = useTranslation()
  const Icon = skill.icon
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const style = {
    '--skill-color': skill.color,
    '--skill-color-soft': hexToRgba(skill.color, 0.12),
  } as CSSProperties

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setIsOpen((open) => !open)}
      aria-expanded={isOpen}
      style={style}
      className={`relative inline-flex items-center gap-3 rounded-full border bg-white px-5 py-3 text-base font-medium shadow-sm shadow-slate-200/60 transition-colors duration-200 hover:border-[var(--skill-color)] dark:bg-slate-900 dark:shadow-none ${
        isOpen ? 'border-[var(--skill-color)]' : 'border-slate-200 dark:border-slate-800'
      }`}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 transition-colors duration-200 dark:bg-slate-800"
        style={{ color: skill.color, backgroundColor: isOpen ? 'var(--skill-color-soft)' : undefined }}
        aria-hidden="true"
      >
        <Icon size={18} />
      </span>
      <span>{skill.name}</span>

      {isOpen && (
        <div
          role="tooltip"
          className="absolute bottom-full left-1/2 z-10 mb-2 w-64 max-w-[80vw] -translate-x-1/2 rounded-lg border border-slate-200 bg-white p-3 text-left text-sm font-normal leading-relaxed text-slate-600 shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          {pickLocalized(skill.description, i18n.language)}
        </div>
      )}
    </button>
  )
}
