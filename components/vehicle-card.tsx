"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Thermometer, Ticket, Settings, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface VehicleCardProps {
  name: string
  image: string
  rate: string
  capacity: number
  isAC: boolean
  hasToll: boolean
  transmission: string
  featured?: boolean
}

export default function VehicleCard({
  name,
  image,
  rate,
  capacity,
  isAC,
  hasToll,
  transmission,
  featured = false,
}: VehicleCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-500 group border-0 border-gray-800 bg-gray-900 shadow-lg hover:shadow-xl rounded-2xl",
        featured ? "ring-2 ring-indigo-600 ring-offset-2 ring-offset-gray-950" : "",
        isHovered ? "transform -translate-y-3 rotate-1" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className={cn("object-cover transition-transform duration-700", isHovered ? "scale-110" : "")}
        />
        {featured && (
          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-medium px-3 py-1 rounded-full">
            Popular Choice
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-gray-300 mt-1">Comfortable travel for your journey</p>
          </div>
        </div>
      </div>

      <CardContent className="p-6 bg-gray-900">
        <div className="flex justify-between items-center mb-4">
          <Badge
            variant="outline"
            className="text-indigo-400 border-indigo-800 bg-gray-800 px-3 py-1 text-sm font-medium rounded-full"
          >
            {rate}
          </Badge>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#818cf8"
                stroke="none"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <Users className="h-4 w-4 text-indigo-400" />
            </div>
            <span className="text-sm text-gray-300">Max People: {capacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <Thermometer className="h-4 w-4 text-indigo-400" />
            </div>
            <span className="text-sm text-gray-300">AC: {isAC ? "Yes" : "No"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <Ticket className="h-4 w-4 text-indigo-400" />
            </div>
            <span className="text-sm text-gray-300">Tolls Included: {hasToll ? "Yes" : "No"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <Settings className="h-4 w-4 text-indigo-400" />
            </div>
            <span className="text-sm text-gray-300">Transmission: {transmission}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 bg-gray-900">
        <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white rounded-full hover:scale-105 transition-all duration-300 group-hover:animate-pulse">
          Book Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

