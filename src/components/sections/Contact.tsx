import { useTranslation } from 'react-i18next'
import { profile } from '../../data/profile'
import RevealOnScroll from '../ui/RevealOnScroll'
import SectionHeading from '../ui/SectionHeading'

const LINKEDIN_URL = 'https://www.linkedin.com/in/ivan-mart%C3%ADnez-company-03a4b7113/'
const GITHUB_URL = 'https://github.com/evansxe'

export default function Contact() {
  const { t, i18n } = useTranslation()
  const cvHref = i18n.language.startsWith('es') ? '/cv-es.pdf' : '/cv-en.pdf'

  return (
    <section id="contact" className="section-container text-center">
      <RevealOnScroll>
        <SectionHeading number="05">{t('contact.heading')}</SectionHeading>
        <p className="mt-3 text-slate-600 dark:text-slate-400">{t('contact.subheading')}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800"
          >
            {t('contact.email')}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800"
          >
            GitHub
          </a>
          <a
            href={cvHref}
            download
            className="no-print rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            {t('contact.downloadCv')}
          </a>
        </div>
      </RevealOnScroll>
    </section>
  )
}
