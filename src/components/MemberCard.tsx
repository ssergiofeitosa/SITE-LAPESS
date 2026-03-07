import { Instagram, Github, Linkedin } from 'lucide-react'
import type { Member } from '../types'

export default function MemberCard({
  name,
  role,
  description,
  image,
  social,
}: Member) {
  return (
    <div className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 border-4 border-[#E7EDF3] rounded-xl flex flex-col">
      <div className="overflow-hidden aspect-[3/2]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="space-y-3 p-3 flex-1 flex flex-col">
        <div>
          <h3 className="text-primary text-2xl font-normal">{name}</h3>
          <span className="text-secondary text-xl font-normal">{role}</span>
        </div>

        <p className="leading-relaxed text-xl font-normal text-[#8794A1]">
          {description}
        </p>

        {social && (
          <div className="flex items-center gap-3 pt-1 mt-auto">
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram de ${name}`}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 hover:opacity-80 bg-[#F4F8FB] text-[#1D262F]"
              >
                <Instagram size={18} />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub de ${name}`}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 hover:opacity-80 bg-[#F4F8FB] text-[#1D262F]"
              >
                <Github size={18} />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${name}`}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 hover:opacity-80 bg-[#F4F8FB] text-[#1D262F]"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
