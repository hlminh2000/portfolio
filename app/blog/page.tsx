import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices",
    preview: "Exploring best practices for designing and implementing microservices architecture...",
    date: "2024-12-15",
    slug: "building-scalable-microservices",
    image: "/images/blog/microservices.jpg"
  },
  {
    id: 2,
    title: "React Performance Optimization",
    preview: "Deep dive into advanced techniques for optimizing React applications...",
    date: "2024-11-30",
    slug: "react-performance-optimization",
    image: "/images/blog/react-performance.jpg"
  },
  {
    id: 3,
    title: "The Future of Web Development",
    preview: "Analyzing emerging trends and technologies shaping the future of web development...",
    date: "2024-11-15",
    slug: "future-of-web-development",
    image: "/images/blog/web-development-future.jpg"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row gap-6">
              {post.image && (
                <div className="md:w-1/3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
              )}
              <div className={post.image ? "md:w-2/3" : "w-full"}>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-400 mb-4">{post.preview}</p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

