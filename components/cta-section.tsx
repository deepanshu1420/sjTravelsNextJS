import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-indigo-900 to-purple-900 py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Comfortable Journey?</h2>
        <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-lg">
          Experience the best travel service in Tirupati with our premium fleet and professional drivers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-indigo-800 hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-indigo-400 text-indigo-400 hover:bg-indigo-800/20 font-bold px-8 py-6 text-lg rounded-full hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

