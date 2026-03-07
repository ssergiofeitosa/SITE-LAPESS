import { ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import BlogPostCard from './BlogPostCard'
import { posts } from '../data'

export default function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-white bg-gray-50/50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mt-3 leading-tight">
            Últimas <span className="text-secondary">postagens</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-7 h-10 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-light transition-colors duration-200"
          >
            Ver todas postagens
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
