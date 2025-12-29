import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VehicleCard from "@/components/vehicle-card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { vehicles } from "@/data/vehicles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Vehicle Fleet",
  description:
    "Explore our premium fleet of vehicles including Swift Dzire, Toyota Innova, and luxury buses for all your travel needs in Tirupati.",
  keywords: ["Tirupati car rental", "vehicle fleet", "Swift Dzire", "Toyota Innova", "luxury bus rental"],
  openGraph: {
    title: "Our Vehicle Fleet | Sharma Ji Travels",
    description:
      "Explore our premium fleet of vehicles including Swift Dzire, Toyota Innova, and luxury buses for all your travel needs in Tirupati.",
  },
}

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-900 py-16 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Our Vehicle Fleet</h1>
              <p className="mt-2 text-indigo-100">Explore our premium vehicles for your journey</p>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 bg-gray-950">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {vehicles.slice(0, 3).map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              name={vehicle.name}
              image={vehicle.image}
              rate={vehicle.rate}
              capacity={vehicle.capacity}
              isAC={vehicle.isAC}
              hasToll={vehicle.hasToll}
              transmission={vehicle.transmission}
              featured={vehicle.featured}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {vehicles.slice(3, 6).map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              name={vehicle.name}
              image={vehicle.image}
              rate={vehicle.rate}
              capacity={vehicle.capacity}
              isAC={vehicle.isAC}
              hasToll={vehicle.hasToll}
              transmission={vehicle.transmission}
              featured={vehicle.featured}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.slice(6).map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              name={vehicle.name}
              image={vehicle.image}
              rate={vehicle.rate}
              capacity={vehicle.capacity}
              isAC={vehicle.isAC}
              hasToll={vehicle.hasToll}
              transmission={vehicle.transmission}
              featured={vehicle.featured}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

