import { useTranslation } from 'react-i18next'
import { useActiveSection } from '../../hooks/useActiveSection'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageSwitch from '../ui/LanguageSwitch'

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const activeId = useActiveSection(SECTION_IDS)

  const links: { id: string; label: string }[] = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'contact', label: t('nav.contact') },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a href="#top" className="font-display text-base font-semibold tracking-tight text-accent dark:text-accent-light">
          IM
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={
                  activeId === link.id
                    ? 'text-accent dark:text-accent-light'
                    : 'text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>

      <ul className="flex items-center justify-between gap-2 overflow-x-auto px-6 pb-3 text-xs font-medium sm:hidden">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeId === link.id ? 'text-accent dark:text-accent-light' : 'text-slate-500 dark:text-slate-400'}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
