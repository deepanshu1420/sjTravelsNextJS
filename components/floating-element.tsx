"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function FloatingElement({ children, className, delay = 0 }: FloatingElementProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={cn(
        "transition-all duration-1000 ease-out animate-float",
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

