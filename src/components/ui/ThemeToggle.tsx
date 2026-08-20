import { TbMoon, TbSun } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={toggleTheme}
      aria-label={t('theme.toggle')}
      title={t('theme.toggle')}
      className="relative h-7 w-14 shrink-0 rounded-full border border-slate-200 bg-slate-100 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800"
    >
      <span
        className={`absolute left-0.5 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition-transform duration-300 dark:bg-slate-950 dark:text-accent-light ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDark ? <TbMoon size={14} /> : <TbSun size={14} />}
      </span>
    </button>
  )
}
