import React from "react"
import { Car, Users, Shield, MapPin } from "lucide-react"
import FloatingElement from "@/components/floating-element"
import AnimatedStats from "@/components/animated-stats"
import { stats } from "@/data/stats"

export default function StatsSection() {
  // Map icon strings to actual components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Car":
        return Car
      case "Users":
        return Users
      case "Shield":
        return Shield
      case "MapPin":
        return MapPin
      default:
        return Car
    }
  }

  return (
    <section className="py-12 bg-gradient-to-r from-gray-900 to-indigo-950">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <FloatingElement key={stat.id} delay={(index + 1) * 100} className="h-full">
              <div className="p-6 rounded-xl bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:rotate-1 h-full">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.bgColor} rounded-2xl flex items-center justify-center text-white animate-pulse`}
                >
                  {React.createElement(getIcon(stat.icon), { className: "h-8 w-8" })}
                </div>
                <AnimatedStats value={stat.value} suffix={stat.suffix} className="text-white" />
                <p className="text-gray-300 mt-2">{stat.label}</p>
              </div>
            </FloatingElement>
          ))}
        </div>
      </div>
    </section>
  )
}

