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
          <article className="max-w-3xl mx-auto px-6 prose prose-invert">
            {children}
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

