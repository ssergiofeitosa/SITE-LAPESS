import type { BlogPost } from '../types'

export default function BlogPostCard({
  title,
  description,
  date,
  tags,
  image,
}: BlogPost) {
  return (
    <article className="bg-white overflow-hidden border-4 border-[#E7EDF3] rounded-xl flex flex-col">
      <div className="overflow-hidden aspect-[3/2]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <span className="text-[#647382] text-[15px] font-normal pb-2.5 block">
          Postado em {date}
        </span>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center rounded-full px-3 h-[26px] bg-[#FFEBE5] text-[#D64B29] text-[15px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-primary leading-snug mt-2">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-[#8794A1] text-justify mt-2">
          {description}
        </p>
      </div>
    </article>
  )
}
