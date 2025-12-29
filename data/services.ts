export interface Service {
  id: string
  title: string
  description: string
  icon: any
  price: string
  bgColor: string
}

export const services = [
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description:
      "Enjoy hassle-free airport transfers with our punctual and reliable service. Our drivers will track your flight and wait for you even if it's delayed.",
    icon: "Car",
    price: "Starting at Rs. 800",
    bgColor: "from-indigo-800 to-purple-800",
  },
  {
    id: "temple-tours",
    title: "Temple Tours",
    description:
      "Explore the divine temples of Tirupati and surrounding areas with our specialized temple tour packages designed for pilgrims.",
    icon: "TempleIcon",
    price: "Starting at Rs. 1200",
    bgColor: "from-amber-600 to-orange-600",
  },
  {
    id: "corporate-travel",
    title: "Corporate Travel",
    description:
      "We provide corporate travel solutions with premium vehicles and professional drivers for business meetings, events, and employee transportation.",
    icon: "Briefcase",
    price: "Custom Packages",
    bgColor: "from-indigo-800 to-purple-800",
  },
]

