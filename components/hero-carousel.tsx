"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const images = [
  {
    src: "/images/vehicles/swift.webp",
    alt: "Swift Dzire - Comfortable Sedan for Family Trips",
  },
  {
    src: "/images/vehicles/toyota.jpg",
    alt: "Toyota Innova - Spacious SUV for Group Travel",
  },
  {
    src: "/images/vehicles/urbania.webp",
    alt: "Force Urbania - Luxury Bus for Large Groups",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-in-out transform",
            index === currentIndex
              ? "opacity-100 translate-x-0"
              : index < currentIndex
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full",
          )}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex ? "bg-white w-10" : "bg-white/50 hover:bg-white/70",
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

