import Image from 'next/image'
import { notFound } from 'next/navigation'

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "2024-12-15",
    slug: "building-scalable-microservices",
    image: "/images/blog/microservices.jpg"
  },
  {
    id: 2,
    title: "React Performance Optimization",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    date: "2024-11-30",
    slug: "react-performance-optimization",
    image: "/images/blog/react-performance.jpg"
  },
  {
    id: 3,
    title: "The Future of Web Development",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    date: "2024-11-15",
    slug: "future-of-web-development",
    image: "/images/blog/web-development-future.jpg"
  }
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <article className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-400 mb-8">{post.date}</div>
        {post.image && (
          <div className="mb-8">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg object-cover w-full h-64 md:h-96"
            />
          </div>
        )}
        <div className="prose prose-invert max-w-none">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  )
}

