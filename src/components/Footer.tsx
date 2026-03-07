import { Link } from '@tanstack/react-router'
import { Instagram, Github } from 'lucide-react'
import { useScrollToSection } from '../hooks/useScrollToSection'

const footerLinks = [
  { label: 'Início', href: '/' },
  { label: 'Integrantes', href: '/integrantes' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Blog', href: '/blog' },
]

export default function Footer() {
  const scrollToSection = useScrollToSection()

  return (
    <footer id="contato" className="bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/logo-white.svg" alt="LAPESS" width={183} height={94} className="w-[183px] h-[94px]" />
            </Link>
          </div>

          <nav>
            <ul className="flex flex-col items-center lg:items-end gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/70 hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10 py-6 flex justify-center gap-4">
          <a
            href="https://www.instagram.com/lapess_univasf/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-200"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://github.com/LAPESS-Research"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-200"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
