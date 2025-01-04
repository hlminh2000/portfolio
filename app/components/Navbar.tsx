"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";


export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sections = ['about', 'timeline', 'blog', 'contact'];
  
  const currentPath = typeof window !== "undefined" 
    ? window.location.pathname 
    : sections[0];

  const pathName = usePathname();

  console.log(pathName);


  return (
    <nav className="fixed top-0 w-full bg-gray-900/50 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Minh Ha
            </h1>
          </Link>
          <div className="hidden md:flex gap-8">
            {sections.map((section) => (
              <Link
                key={section}
                href={section === "blog" ? "/blog" : `/#${section}`}
                className={`capitalize ${currentPath.includes(section) ? "text-gray-200" : "text-gray-400"} hover:text-gray-200 transition-colors`}
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
              {isDropdownOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-1">
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
  );
}
