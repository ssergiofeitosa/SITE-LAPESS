import { useState, useEffect } from 'react'
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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
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
    <header
      className={`border-b-[2px] border-[#E7EDF3] sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
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

      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
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
        <div className="p-4 border-t border-gray-100">
          <Link
            to="/"
            onClick={() => handleNavClick('/#contato')}
            className="block w-full text-center px-5 py-3 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary-light transition-colors"
          >
            Fale conosco
          </Link>
        </div>
      </div>
    </header>
  )
}
