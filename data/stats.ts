export interface Stat {
  id: string
  value: number
  suffix: string
  label: string
  icon: string
  bgColor: string
}

export const stats: Stat[] = [
  {
    id: "vehicles",
    value: 50,
    suffix: "+",
    label: "Premium Vehicles",
    icon: "Car",
    bgColor: "from-indigo-800 to-purple-800",
  },
  {
    id: "customers",
    value: 10,
    suffix: "k+",
    label: "Happy Customers",
    icon: "Users",
    bgColor: "from-amber-600 to-orange-600",
  },
  {
    id: "safety",
    value: 100,
    suffix: "%",
    label: "Safe Travels",
    icon: "Shield",
    bgColor: "from-indigo-800 to-purple-800",
  },
  {
    id: "destinations",
    value: 500,
    suffix: "+",
    label: "Destinations",
    icon: "MapPin",
    bgColor: "from-amber-600 to-orange-600",
  },
]

