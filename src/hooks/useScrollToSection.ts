import { useCallback } from 'react'

export function useScrollToSection() {
  const scrollToSection = useCallback((href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return scrollToSection
}
