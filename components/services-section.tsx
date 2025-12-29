import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Briefcase } from "lucide-react"
import { services } from "@/data/services"

// Custom Temple Icon since it's not in Lucide
const TempleIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
    <path d="M5 13v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
    <path d="M12 6v14" />
  </svg>
)

export default function ServicesSection() {
  // Map icon strings to actual components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Car":
        return Car
      case "TempleIcon":
        return TempleIcon
      case "Briefcase":
        return Briefcase
      default:
        return Car
    }
  }

  return (
    <section className="mb-20" data-aos="fade-up" data-aos-delay="200">
      <div className="text-center mb-12">
        <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">What We Offer</span>
        <h2 className="text-4xl font-bold text-white mt-2">Our Premium Services</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => {
          const IconComponent = getIcon(service.icon)

          return (
            <Card
              key={service.id}
              className="overflow-hidden group border-0 border-gray-800 bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl hover:scale-105 hover:rotate-1"
            >
              <div className={`h-48 bg-gradient-to-r ${service.bgColor} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <IconComponent className="h-20 w-20 text-white opacity-20 group-hover:scale-125 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-6 bg-gray-900">
                <p className="text-gray-300">{service.description}</p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm font-semibold text-indigo-400">{service.price}</span>
                  <Button
                    variant="ghost"
                    className="text-indigo-400 hover:text-indigo-300 p-0 hover:bg-transparent group"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

