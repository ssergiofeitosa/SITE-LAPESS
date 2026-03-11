import { useState, useEffect, useRef } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useScrollToSection } from '../hooks/useScrollToSection'

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Integrantes', href: '/integrantes' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [hideBorder, setHideBorder] = useState(false)
  const borderTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname
  const scrollToSection = useScrollToSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      if (borderTimerRef.current) clearTimeout(borderTimerRef.current)
      setHideBorder(true)
    } else {
      document.body.style.overflow = ''
      borderTimerRef.current = setTimeout(() => setHideBorder(false), 100)
    }
    return () => {
      document.body.style.overflow = ''
      if (borderTimerRef.current) clearTimeout(borderTimerRef.current)
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    scrollToSection(href)
  }

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/'
    if (href.startsWith('/') && !href.startsWith('/#')) return currentPath === href
    return false
  }

  return (
    <>
      <header
        className={`border-b-[2px] ${hideBorder ? 'border-transparent' : 'border-[#E7EDF3]'} sticky top-0 z-50 transition-all duration-50 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 relative">
            <Link to="/" className="flex items-center group">
              <img src="/logo-dark.svg" alt="LAPESS" className="h-8 lg:h-10 w-auto" />
            </Link>

            <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-2 rounded-lg text-xl font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-secondary bg-secondary/10'
                        : 'text-primary/70 hover:text-secondary hover:bg-secondary/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-primary hover:bg-gray-100 transition-colors"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden ${isMounted ? 'transition-opacity duration-300' : ''} ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 lg:hidden transform ${isMounted ? 'transition-transform duration-300 ease-out' : ''} shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="text-lg font-bold text-primary">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Fechar menu"
          >
            <X size={20} className="text-primary" />
          </button>
        </div>
        <ul className="p-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-secondary bg-secondary/10'
                    : 'text-primary/70 hover:text-secondary hover:bg-secondary/5'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
