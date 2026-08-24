import type { CSSProperties, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { TbBrandGithub, TbBrandLinkedin, TbFileDownload, TbMail } from 'react-icons/tb'
import { profile } from '../../data/profile'
import { useSpotlight } from '../../hooks/useSpotlight'
import { hexToRgba } from '../../utils/color'
import RevealOnScroll from '../ui/RevealOnScroll'
import SectionHeading from '../ui/SectionHeading'

const LINKEDIN_URL = 'https://www.linkedin.com/in/ivan-mart%C3%ADnez-company-03a4b7113/'
const GITHUB_URL = 'https://github.com/evansxe'

function ContactCard({
  href,
  color,
  icon,
  label,
  detail,
}: {
  href: string
  color: string
  icon: ReactNode
  label: string
  detail: string
}) {
  const { ref, handleMouseMove } = useSpotlight<HTMLAnchorElement>()

  const style = {
    '--contact-color': color,
    '--spotlight-color': hexToRgba(color, 0.18),
  } as CSSProperties

  return (
    <a
      ref={ref}
      onMouseMove={handleMouseMove}
      href={href}
      target="_blank"
      rel="noreferrer"
      style={style}
      className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 transition-all hover:-translate-y-1 hover:border-[var(--contact-color)] hover:shadow-[0_20px_45px_-24px_var(--contact-color)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-[var(--contact-color)] dark:hover:shadow-none"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--spotlight-color), transparent 70%)',
        }}
      />

      <span
        className="relative flex h-11 w-11 items-center justify-center rounded-xl text-xl transition-colors duration-300"
        style={{ backgroundColor: hexToRgba(color, 0.12), color }}
      >
        {icon}
      </span>

      <div className="relative">
        <p className="font-semibold">{label}</p>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-500">{detail}</p>
      </div>
    </a>
  )
}

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section-container relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl dark:bg-accent/10" />
      </div>

      <RevealOnScroll>
        <SectionHeading number="05">{t('contact.heading')}</SectionHeading>
        <p className="mt-3 max-w-xl text-lg text-slate-600 dark:text-slate-400">{t('contact.subheading')}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <ContactCard
            href={`mailto:${profile.email}`}
            color="#6366F1"
            icon={<TbMail />}
            label={t('contact.email')}
            detail={profile.email}
          />
          <ContactCard
            href={LINKEDIN_URL}
            color="#0A66C2"
            icon={<TbBrandLinkedin />}
            label="LinkedIn"
            detail="ivan-martínez-company"
          />
          <ContactCard
            href={GITHUB_URL}
            color="#6E7781"
            icon={<TbBrandGithub />}
            label="GitHub"
            detail="@evansxe"
          />
        </div>

        <Link
          to="/cv"
          className="no-print mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
        >
          <TbFileDownload className="text-base" aria-hidden="true" />
          {t('contact.downloadCv')}
        </Link>
      </RevealOnScroll>
    </section>
  )
}
