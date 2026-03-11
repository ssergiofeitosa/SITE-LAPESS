import type { Project } from '../types'

interface ProjectCardProps extends Project {
  reverse?: boolean
}

export default function ProjectCard({
  title,
  description,
  images,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className={`space-y-5 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <h3 className="text-2xl sm:text-5xl font-extrabold text-primary leading-tight">
          {title}
        </h3>

        <p className="text-primary/60 leading-relaxed text-xl">
          {description}
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2 px-5 h-10 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary-light transition-colors duration-200"
        >
          Saber mais
        </a>
      </div>

      <div className={`relative overflow-hidden ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative w-full aspect-[4/3]">
          <div className="absolute top-0 left-0 w-[65%] h-[65%] lg:w-[80%] lg:h-[75%] rounded-xl lg:rounded-2xl border-2 lg:border-3 border-secondary overflow-hidden">
            <img
              src={images[0]}
              alt={`${title} - imagem 1`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-[20%] left-[15%] lg:top-[25%] lg:left-[20%] w-[65%] h-[65%] lg:w-[80%] lg:h-[75%] rounded-xl lg:rounded-2xl border-2 lg:border-3 border-secondary overflow-hidden shadow-xl bg-white">
            <img
              src={images[1]}
              alt={`${title} - imagem 2`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
