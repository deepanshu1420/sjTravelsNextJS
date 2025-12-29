"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { reviews } from "@/data/reviews"

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const showPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const showNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(showNext, 8000)
    return () => clearInterval(interval)
  }, [])

  const visibleReviews = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length
      result.push(reviews[index])
    }
    return result
  }

  return (
    <div className="relative">
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-gray-800 shadow-lg hover:bg-gray-700 border-gray-700 text-indigo-400"
          onClick={showPrev}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-gray-800 shadow-lg hover:bg-gray-700 border-gray-700 text-indigo-400"
          onClick={showNext}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {visibleReviews().map((review, index) => (
          <Card
            key={review.id}
            className={cn(
              "transition-all duration-500 hover:shadow-xl border-0 border-gray-800 bg-gray-900 shadow-lg rounded-2xl overflow-hidden hover:scale-105 hover:rotate-1",
              isAnimating ? "opacity-50" : "opacity-100",
            )}
          >
            <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-700"></div>
            <CardHeader className="pt-6 pb-0">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Avatar className="border-2 border-gray-800 h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-lg">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-sm text-gray-400">{review.date}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn("h-4 w-4", i < review.rating ? "fill-amber-500 text-amber-500" : "text-gray-600")}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 relative">
              <Quote className="absolute top-0 right-0 h-8 w-8 text-gray-700 rotate-180" />
              <p className="text-gray-300 mt-2 relative z-10">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-1">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index >= currentIndex && index < currentIndex + 3
                ? "bg-indigo-600 w-8"
                : "bg-gray-700 hover:bg-indigo-500",
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

