import { ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import heroImage from '../assets/Creative team-cuate(1) 1.svg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] py-16 lg:py-0">
          <div className="space-y-6 lg:space-y-8 lg:pt-32 order-2 lg:order-1 text-center lg:text-left">
            <h1 className=" tracking-tighter text-[2rem] sm:text-[2.5rem] lg:text-[48px] font-semibold text-primary leading-tight tracking-tight">
              Construindo um futuro melhor
              <span className=" tracking-tighter text-secondary"> projeto por projeto.</span>
            </h1>

            <p className="tracking-tight text-[1.25rem] lg:text-[24px] font-normal leading-relaxed max-w-lg" style={{ color: '#647382' }}>
              Conheça nossos integrantes, projetos desenvolvidos e muito mais.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 px-6 h-10 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-light transition-colors duration-200"
              >
                Projetos
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/integrantes"
                className="inline-flex items-center gap-2 px-6 h-10 border text-primary font-semibold rounded-lg hover:border-secondary/30 hover:text-secondary transition-colors duration-200"
                style={{ backgroundColor: '#FAFCFE', borderColor: '#D6DCE3' }}
              >
                Integrantes
              </Link>
            </div>

          </div>
          <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <img
              src={heroImage}
              alt="Equipe criativa trabalhando juntos"
              width={750}
              height={500}
              className="w-full max-w-[750px] h-auto"
            />
          </div>
        </div>
      </div>


    </section>
  )
}

