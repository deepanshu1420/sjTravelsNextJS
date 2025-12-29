import { Button } from "@/components/ui/button"
import HeroCarousel from "@/components/hero-carousel"
import HeroCards from "@/components/hero-cards"

export default function HeroSection() {
  return (
    <section className="relative">
      <HeroCarousel />
      <div className="absolute inset-0 flex items-center justify-center flex-col p-4 bg-gradient-to-r from-gray-950/95 to-indigo-950/95 text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl animate-fade-up animate-once animate-duration-1000 animate-delay-300 leading-tight">
          Discover Comfortable & Affordable Travel with SJ Travels
        </h1>
        <p className="mt-6 text-center max-w-2xl text-lg md:text-xl animate-fade-up animate-once animate-duration-1000 animate-delay-500 text-gray-300">
          Premium fleet for all your travel needs in Tirupati
        </p>
        <Button
          size="lg"
          className="mt-8 animate-fade-up animate-once animate-duration-1000 animate-delay-700 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Book Your Ride Now
        </Button>

        {/* Floating Cards - Only visible on larger screens */}
        <div className="hidden md:block">
          <HeroCards />
        </div>
      </div>
    </section>
  )
}

