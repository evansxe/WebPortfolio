import { useTranslation } from 'react-i18next'

const LANGUAGES: { code: 'en' | 'es'; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

export default function LanguageSwitch() {
  const { i18n } = useTranslation()
  const current = i18n.language.startsWith('es') ? 'es' : 'en'

  return (
    <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1 text-xs font-medium dark:bg-slate-800">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={current === code}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            current === code
              ? 'bg-white text-accent shadow dark:bg-slate-950 dark:text-accent-light'
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
