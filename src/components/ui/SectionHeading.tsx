import type { ReactNode } from 'react'

interface SectionHeadingProps {
  number: string
  children: ReactNode
}

export default function SectionHeading({ number, children }: SectionHeadingProps) {
  return (
    <div>
      <span className="font-display text-sm font-semibold tracking-[0.2em] text-accent dark:text-accent-light">
        {number}
      </span>
      <h2 className="mt-1 text-2xl font-bold sm:text-3xl">{children}</h2>
    </div>
  )
}
