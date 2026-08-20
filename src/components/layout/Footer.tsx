import { useTranslation } from 'react-i18next'
import { profile } from '../../data/profile'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="no-print border-t border-slate-200 py-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
      © {year} {profile.firstName} {profile.lastName}. {t('footer.rights')}
    </footer>
  )
}
