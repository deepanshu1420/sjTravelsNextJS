import { CheckCircle } from "lucide-react"

const features = ["24/7 Customer Support", "Experienced Drivers", "Well-maintained Vehicles", "Competitive Pricing"]

export default function AboutSection() {
  return (
    <section className="mb-20 text-center max-w-4xl mx-auto" data-aos="fade-up">
      <div className="inline-block mb-6 relative">
        <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">About Us</span>
        <h2 className="text-4xl font-bold text-white mt-2">Welcome to SJ Travels</h2>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full"></div>
      </div>
      <p className="text-xl text-gray-300 mt-8">
        Looking for reliable and affordable car or bus rentals in Tirupati? SJ Travels offers a premium fleet including
        Swift Dzire, Toyota Innova, Etios, and luxury buses for every travel need.
      </p>
      <p className="text-xl text-gray-300 mt-4">
        Whether you're planning a family trip, corporate event, or group outing, we've got the perfect vehicle for you.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300 hover:scale-105 transform"
          >
            <CheckCircle className="h-5 w-5 text-indigo-400" />
            <span className="text-gray-200">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

