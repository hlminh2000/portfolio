import Link from 'next/link'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="bg-gray-800 py-4">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Minh Ha
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
            Blog
          </Link>
        </div>
      </nav>

      <main>
        <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
          <article className="max-w-3xl mx-auto px-6">
            {/* <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
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
                )} */}
            <div className="prose prose-invert max-w-none">
              {children}
            </div>
          </article>
        </div>

      </main>
      <footer className="bg-gray-800 py-4 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-400">
          © 2025 Minh Ha. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

