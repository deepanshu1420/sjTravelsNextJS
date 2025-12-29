export interface Vehicle {
  id: string
  name: string
  image: string
  rate: string
  capacity: number
  isAC: boolean
  hasToll: boolean
  transmission: string
  featured?: boolean
}

export const vehicles: Vehicle[] = [
  {
    id: "force-urbania",
    name: "Force Urbania",
    image: "/images/vehicles/urbania.webp",
    rate: "Rs. 50/km",
    capacity: 17,
    isAC: true,
    hasToll: true,
    transmission: "Automatic",
  },
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    image: "/images/vehicles/swift.webp",
    rate: "Rs. 17/km",
    capacity: 5,
    isAC: true,
    hasToll: true,
    transmission: "Manual",
    featured: true,
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova",
    image: "/images/vehicles/toyota.jpg",
    rate: "Rs. 22/km",
    capacity: 7,
    isAC: true,
    hasToll: true,
    transmission: "Automatic",
  },
  {
    id: "toyota-etios",
    name: "Toyota Etios",
    image: "/images/vehicles/etios.webp",
    rate: "Rs. 15/km",
    capacity: 5,
    isAC: true,
    hasToll: true,
    transmission: "Manual",
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    image: "/images/vehicles/tempo.webp",
    rate: "Rs. 35/km",
    capacity: 12,
    isAC: true,
    hasToll: true,
    transmission: "Manual",
  },
  {
    id: "tempo-traveller-21",
    name: "Tempo Traveller 21-seater",
    image: "/images/vehicles/tempo3.jpg",
    rate: "Rs. 75/km",
    capacity: 4,
    isAC: true,
    hasToll: true,
    transmission: "Automatic",
    featured: true,
  },
  {
    id: "hyundai-creta",
    name: "Hyundai Creta",
    image: "images/vehicles/hyundai.jpg",
    rate: "Rs. 25/km",
    capacity: 5,
    isAC: true,
    hasToll: true,
    transmission: "Automatic",
  },
  {
    id: "mini-bus21",
    name: "Mini Bus 21-seater",
    image: "images/vehicles/bus1.avif",
    rate: "Rs. 40/km",
    capacity: 21,
    isAC: true,
    hasToll: true,
    transmission: "Manual",
  },
  {
    id: "luxury-bus",
    name: "Luxury Bus",
    image: "/images/vehicles/luxurybus2.jpg",
    rate: "Rs. 80/km",
    capacity: 45,
    isAC: true,
    hasToll: true,
    transmission: "Automatic",
  },
]

