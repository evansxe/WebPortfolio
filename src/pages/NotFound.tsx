import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-bold">{t('notFound.heading')}</h1>
      <p className="text-slate-600 dark:text-slate-400">{t('notFound.body')}</p>
      <Link to="/" className="mt-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dark">
        {t('notFound.backHome')}
      </Link>
    </main>
  )
}
