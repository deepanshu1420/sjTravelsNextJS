"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedStatsProps {
  value: number
  suffix?: string
  className?: string
  duration?: number
}

export default function AnimatedStats({ value, suffix = "", className, duration = 2000 }: AnimatedStatsProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = Math.min(value, 999)
    const increment = end / 40
    const stepTime = Math.floor(duration / 40)

    const timer = setInterval(() => {
      start += increment
      setCount(Math.floor(start))

      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value, duration, isVisible])

  return (
    <div ref={ref} className={cn("text-4xl font-bold text-gray-800", className)}>
      {count}
      {suffix}
    </div>
  )
}

