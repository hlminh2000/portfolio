"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useState } from "react";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sections = [
    'about',
    'timeline',
    // 'blog', 
    'contact'
  ]
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <h1 className="text-2xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">
                  Minh Ha
                </h1>
              </Link>
              <div className="hidden md:flex gap-8">
                {sections.map((section) => (
                    <Link
                      key={section}
                      href={`/#${section}`}
                      className="capitalize text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      {section}
                    </Link>
                  ))}
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  {/* {isDropdownOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />} */}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
                    {sections.map((section) => (
                        <a
                          key={section}
                          href={`#${section}`}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {section}
                        </a>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
