"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Users, MapPin, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

// Card data with inline position values
const cards = [
  {
    title: "Airport Transfers",
    description: "Reliable pickup and drop services",
    icon: Car,
    position: { top: "20%", left: "5%" },
    delay: 0,
  },
  {
    title: "Temple Tours",
    description: "Visit sacred temples with expert guides",
    icon: MapPin,
    position: { top: "60%", right: "5%" },
    delay: 300,
  },
  {
    title: "Group Travel",
    description: "Comfortable vehicles for large groups",
    icon: Users,
    position: { bottom: "15%", left: "5%" },
    delay: 600,
  },
  {
    title: "Corporate Events",
    description: "Professional service for business travel",
    icon: Calendar,
    position: { top: "30%", right: "5%" },
    delay: 900,
  },
]

export default function HeroCards() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {cards.map((card, index) => (
        <div
          key={index}
          className={cn(
            "absolute w-64 transition-all duration-1000 ease-out",
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          )}
          style={{
            ...card.position, // Use direct style for positioning
            transitionDelay: `${card.delay}ms`,
            zIndex: 10,
            maxWidth: "calc(100% - 40px)", // Ensure it fits on mobile too
          }}
        >
          <Card className="border-0 shadow-xl bg-gray-900/90 backdrop-blur-sm hover:bg-gray-800 hover:scale-110 hover:rotate-1 transition-all duration-300 overflow-hidden group">
            <div className="h-1 bg-gradient-to-r from-indigo-600 to-purple-700"></div>
            <CardContent className="p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300 group-hover:animate-pulse">
                <card.icon className="h-5 w-5 text-indigo-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-white">{card.title}</h3>
                <p className="text-sm text-gray-400">{card.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

