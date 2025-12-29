import Link from "next/link"
import { Button } from "@/components/ui/button"
import VehicleCard from "@/components/vehicle-card"
import { ArrowRight } from "lucide-react"
import { vehicles } from "@/data/vehicles"

export default function VehicleFleetSection() {
  // Display only the first 3 vehicles on the home page
  const displayVehicles = vehicles.slice(0, 3)

  return (
    <section className="mb-20" data-aos="fade-up" data-aos-delay="100">
      <div className="text-center mb-12">
        <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">Our Fleet</span>
        <h2 className="text-4xl font-bold text-white mt-2">Premium Vehicles for Your Journey</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayVehicles.map((vehicle) => (
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

      <div className="text-center mt-10">
        <Link href="/vehicles">
          <Button className="bg-gray-800 text-indigo-400 border-2 border-indigo-600 hover:bg-gray-700 font-semibold px-8 py-6 rounded-full hover:scale-105 transition-all duration-300">
            View All Vehicles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}

