import { useEffect, useRef, useState } from 'react'

export function useScrollReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // A fast scroll can carry an element past the viewport between two
        // observer checks, so it never reports isIntersecting: true. Also
        // reveal once its top edge has crossed below the viewport bottom,
        // which catches elements that were skipped over entirely.
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px', ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, isVisible }
}
