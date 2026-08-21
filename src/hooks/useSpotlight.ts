import { useRef, type MouseEvent } from 'react'

export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  const handleMouseMove = (event: MouseEvent<T>) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return { ref, handleMouseMove }
}
