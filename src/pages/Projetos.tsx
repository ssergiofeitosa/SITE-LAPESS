import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'
import astronautImage from '../assets/Astronaut-cuate(3) 1.svg'

export default function Projetos() {
  return (
    <>
      <section className=" pb-16 lg:pb-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <img
              src={astronautImage}
              alt="Projetos"
              className="w-full "
              style={{ maxWidth: '1200px', height: 'auto', aspectRatio: '1298 / 560' }}
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
              Projetos
            </h1>
            <p className="mt-[12px] text-[24px] text-primary/60 max-w-lg leading-tight tracking-tighter">
              Conheça os projetos desenvolvidos por nossa equipe de pesquisa.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-20 lg:pb-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
