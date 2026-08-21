import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useSpotlight } from '../../hooks/useSpotlight'
import type { Project } from '../../types'
import { withBase } from '../../utils/base'
import { hexToRgba } from '../../utils/color'
import { pickLocalized } from '../../utils/localized'
import TechChip from './TechChip'

export default function ProjectCard({ project }: { project: Project }) {
  const { t, i18n } = useTranslation()
  const { ref, handleMouseMove } = useSpotlight<HTMLAnchorElement>()

  const style = {
    '--project-color': project.color,
    '--project-color-soft': hexToRgba(project.color, 0.15),
    '--spotlight-color': hexToRgba(project.color, 0.18),
  } as CSSProperties

  return (
    <Link
      ref={ref}
      onMouseMove={handleMouseMove}
      to={`/projects/${project.slug}`}
      style={style}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/60 transition-all hover:-translate-y-1 hover:border-[var(--project-color)] hover:shadow-[0_20px_45px_-24px_var(--project-color)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-[var(--project-color)] dark:hover:shadow-none"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(360px circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--spotlight-color), transparent 70%)',
        }}
      />

      <div className="relative flex items-center gap-4 border-b border-slate-100 p-6 transition-colors duration-300 group-hover:bg-[var(--project-color-soft)] dark:border-slate-800">
        <img src={withBase(project.logoUrl)} alt="" className="h-14 w-14 rounded-xl" />
        <h3 className="text-xl font-semibold">{project.title}</h3>
      </div>

      <div className="relative flex flex-1 flex-col gap-5 p-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          {pickLocalized(project.shortDescription, i18n.language)}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </div>
        <span
          className="mt-auto text-sm font-medium transition-transform group-hover:translate-x-1"
          style={{ color: project.color }}
        >
          {t('projects.viewDetails')} →
        </span>
      </div>
    </Link>
  )
}
