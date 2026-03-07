import { ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import maskGroup from '../assets/Mask group.svg'


export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <img
              src={maskGroup}
              alt="Equipe LAPESS em pesquisa colaborativa"
              className="w-full"
            />
          </div>

          <div className="space-y-6 lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
              Sobre <span className="text-secondary">nós</span>
            </h2>
            <p className="text-primary/60 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
            <Link
              to="/integrantes"
              className="inline-flex items-center gap-2 px-6 h-10 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-light transition-colors duration-200"
            >
              Conheça o time!
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
