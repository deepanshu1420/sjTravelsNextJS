import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HomestayCard from "@/components/homestay-card"
import { homestays } from "@/data/homestays"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Homestays & Accommodations",
  description:
    "Comfortable and affordable accommodation options for your stay in Tirupati. Book homestays, service apartments, and villas for your pilgrimage or vacation.",
  keywords: ["Tirupati homestays", "Tirupati accommodation", "budget stay Tirupati", "service apartments Tirupati"],
  openGraph: {
    title: "Homestays & Accommodations | Sharma Ji Travels",
    description:
      "Comfortable and affordable accommodation options for your stay in Tirupati. Book homestays, service apartments, and villas for your pilgrimage or vacation.",
  },
}

export default function HomestaysPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-900 py-16 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Homestays</h1>
          <p className="mt-4 text-center max-w-2xl mx-auto text-indigo-100">
            Comfortable and affordable accommodation options for your stay in Tirupati
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 bg-gray-950">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homestays.map((homestay) => (
            <HomestayCard key={homestay.id} homestay={homestay} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

