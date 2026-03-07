import { Link } from '@tanstack/react-router'
import ProjectCard from './ProjectCard'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projetos" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mt-3 leading-tight">
            Explore nossos{' '}
            <span className="text-secondary">projetos</span>
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 px-7 h-10 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-light transition-colors duration-200"
          >
            Ver todos projetos
          </Link>
        </div>
      </div>
    </section>
  )
}