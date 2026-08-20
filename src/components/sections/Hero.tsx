import { useTranslation } from 'react-i18next'
import { profile } from '../../data/profile'
import { withBase } from '../../utils/base'
import { pickLocalized } from '../../utils/localized'

export default function Hero() {
  const { i18n } = useTranslation()

  return (
    <section
      id="top"
      className="section-container relative isolate flex flex-col items-center gap-8 pt-20 text-center sm:pt-28 md:flex-row md:items-center md:gap-12 md:text-left"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl dark:bg-accent/20 sm:h-96 sm:w-96" />
        <div className="absolute -top-10 right-[10%] h-56 w-56 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/10" />
      </div>

      <img
        src={withBase(profile.photoUrl)}
        alt={`${profile.firstName} ${profile.lastName}`}
        className="h-32 w-32 shrink-0 rounded-full object-cover shadow-lg ring-4 ring-white sm:h-40 sm:w-40 md:h-48 md:w-48 dark:ring-slate-900"
      />

      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {profile.firstName} {profile.lastName}
        </h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
          {pickLocalized(profile.title, i18n.language)}
        </p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
          {pickLocalized(profile.location, i18n.language)} · {profile.age}
        </p>

        <blockquote className="mt-6 max-w-xl text-balance text-base italic text-slate-600 dark:text-slate-400">
          “{pickLocalized(profile.quote, i18n.language)}”
        </blockquote>
      </div>
    </section>
  )
}
