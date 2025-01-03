import Link from 'next/link'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main>
        <div className="min-h-screen bg-gray-900 text-gray-100 pt-12">
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

