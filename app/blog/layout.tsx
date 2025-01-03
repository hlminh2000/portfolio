
export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="min-h-screen">
      <main>
        <div className="min-h-screen pt-12">
          {children}
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

