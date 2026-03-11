import MemberCard from '../components/MemberCard'
import { members } from '../data'
import collabImage from '../assets/Collab-cuate 1.svg'

export default function Integrantes() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <img
              src={collabImage}
              alt="Colaboração"
              className="w-full max-w-md lg:max-w-2xl mb-8"
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight ">
              Conheça nosso time
            </h1>
            <p className="mt-4 text-[24px] text-primary/60 max-w-xl leading-relaxed">
              Conheça os membros que ajudam a construir a trajetória do nosso grupo de pesquisa.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {members.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
