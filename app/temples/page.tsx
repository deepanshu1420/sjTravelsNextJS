import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TempleCard from "@/components/temple-card"
import { temples } from "@/data/temples"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sacred Temples",
  description:
    "Explore the divine temples of Tirupati including Sri Venkateswara Temple, Padmavathi Temple, and more with our specialized temple tour packages.",
  keywords: ["Tirupati temples", "Sri Venkateswara Temple", "Tirumala temple", "temple tours", "Padmavathi Temple"],
  openGraph: {
    title: "Sacred Temples | Sharma Ji Travels",
    description:
      "Explore the divine temples of Tirupati including Sri Venkateswara Temple, Padmavathi Temple, and more with our specialized temple tour packages.",
  },
}

export default function TemplesPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-900 py-16 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Sacred Temples</h1>
          <p className="mt-4 text-center max-w-2xl mx-auto text-indigo-100">
            Explore the divine temples of Tirupati and surrounding areas with our specialized temple tour packages
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 bg-gray-950">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temples.map((temple) => (
            <TempleCard key={temple.id} temple={temple} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

