"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "HOMESTAYS", href: "/homestays" },
  { name: "TEMPLES", href: "/temples" },
  { name: "ABOUT US", href: "/about-us" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-20 items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="rounded-lg">
            <Image
              src="/images/SJlogo1.png"
              alt="SJ Travels Logo"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
          <span className="-ml-4 text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text hidden sm:inline-block">
            SJ Travels
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-indigo-400 relative group ${
                pathname === link.href ? "text-indigo-400 font-bold" : "text-gray-300"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="lg"
            className="hidden sm:flex bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white hover:scale-105 transition-all duration-300"
          >
            Book Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-gray-700 text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed right-0 top-0 h-full w-[300px] bg-gray-900 shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-1">
                <div className="rounded-lg">
                  <Image
                    src="/images/SJlogo1.png"
                    alt="SJ Travels Logo"
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                </div>
                <span className="-ml-4 text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                  SJ Travels
                </span>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-300" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-2 px-4 rounded-md hover:bg-gray-800 transition-colors ${
                    pathname === link.href ? "text-indigo-400 font-bold bg-gray-800/50" : "text-gray-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white">
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="mt-6 space-y-2">
                <p className="text-sm text-gray-400">Contact us:</p>
                <p className="text-sm font-medium text-gray-300">+91-9350099593</p>
                <p className="text-sm font-medium text-gray-300">hello@sharmajitravels.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

