import { useState } from 'react'
import { Search, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import BlogPostCard from '../components/BlogPostCard'
import { posts } from '../data'
import blogImage from '../assets/New entries-cuate 1.svg'

const POSTS_PER_PAGE = 3

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const btnBase =
    'w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors duration-200'

  return (
    <>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <img
              src={blogImage}
              alt="Blog"
              className="w-full mb-8"
              style={{ maxWidth: '708px', height: 'auto', aspectRatio: '708 / 335' }}
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
              Blog
            </h1>
            <p className="mt-4 text-[24px] text-primary/60 max-w-xl leading-relaxed">
              Veja o que o nosso grupo de pesquisa está fazendo.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
                className="w-full h-12 pl-11 pr-4 rounded-lg text-sm text-primary placeholder:text-primary/40 outline-none transition-colors duration-200"
                style={{ border: '1px solid #D6DCE3', backgroundColor: '#FAFCFE' }}
              />
            </div>
            <button className="h-12 px-6 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-light transition-colors duration-200">
              Buscar
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {paginatedPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>

          {/* Paginador */}
          <div className="flex items-center justify-center gap-1 mt-12">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className={`${btnBase} ${currentPage === 1 ? 'text-primary/20 cursor-not-allowed' : 'text-primary/60 hover:bg-gray-100'}`}
            >
              <ChevronsLeft size={16} />
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`${btnBase} ${currentPage === 1 ? 'text-primary/20 cursor-not-allowed' : 'text-primary/60 hover:bg-gray-100'}`}
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${btnBase} ${
                  page === currentPage
                    ? 'bg-secondary text-white'
                    : 'text-primary/60 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`${btnBase} ${currentPage === totalPages ? 'text-primary/20 cursor-not-allowed' : 'text-primary/60 hover:bg-gray-100'}`}
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className={`${btnBase} ${currentPage === totalPages ? 'text-primary/20 cursor-not-allowed' : 'text-primary/60 hover:bg-gray-100'}`}
            >
              <ChevronsRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
