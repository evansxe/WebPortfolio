import { useTranslation } from 'react-i18next'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import RevealOnScroll from '../ui/RevealOnScroll'
import SectionHeading from '../ui/SectionHeading'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="section-container">
      <RevealOnScroll>
        <SectionHeading number="03">{t('projects.heading')}</SectionHeading>
      </RevealOnScroll>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.slug} delayMs={i * 100}>
            <ProjectCard project={project} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
