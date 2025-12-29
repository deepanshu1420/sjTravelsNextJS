export interface Homestay {
  id: string
  name: string
  image: string
  capacity: string
  meals: string
  refundPolicy: string
  pricePerNight: string
  baseFee: string
  taxes: string
}

export const homestays: Homestay[] = [
  {
    id: "redstone-villas",
    name: "Redstone villas and suites",
    image: "/images/redstone.jpg",
    capacity: "Fits 4 Adults",
    meals: "No meals included",
    refundPolicy: "Non-Refundable",
    pricePerNight: "₹ 2,500 Per Night",
    baseFee: "₹ 1,950",
    taxes: "₹ 700 taxes & fees",
  },
  {
    id: "sree-service",
    name: "Sree Service Apartments",
    image: "/images/home3.webp",
    capacity: "Fits 2 Adults",
    meals: "No meals included",
    refundPolicy: "Non-Refundable",
    pricePerNight: "₹ 2,999 Per Night",
    baseFee: "₹ 1,999",
    taxes: "₹ 800 taxes & fees",
  },
  {
    id: "ushus-homestay",
    name: "Ushus Homestay",
    image: "/images/keralastay.jpeg",
    capacity: "Fits 4 Adults",
    meals: "No meals included",
    refundPolicy: "Non-Refundable",
    pricePerNight: "₹ 3,200 Per Night",
    baseFee: "₹ 2,900",
    taxes: "₹ 700 taxes & fees",
  },
  {
    id: "mahas-gateway",
    name: "MAHAS Gateway Homestay",
    image: "/images/home2.avif",
    capacity: "Fits 3 Adults",
    meals: "Breakfast included",
    refundPolicy: "Free cancellation",
    pricePerNight: "₹ 2,500 Per Night",
    baseFee: "₹ 1,800",
    taxes: "₹ 500 taxes & fees",
  },
  {
    id: "green-valley",
    name: "Green Valley Homestay",
    image: "/images/home1.webp",
    capacity: "Fits 4 Adults",
    meals: "No meals included",
    refundPolicy: "Non-Refundable",
    pricePerNight: "₹ 3,999 Per Night",
    baseFee: "₹ 2,999",
    taxes: "₹ 700 taxes & fees",
  },
  {
    id: "wooden-cottage",
    name: "Wooden Cottage Villa",
    image: "/images/homestay1.jpg",
    capacity: "Fits 4 Adults",
    meals: "No meals included",
    refundPolicy: "Non-Refundable",
    pricePerNight: "₹ 4,950 Per Night",
    baseFee: "₹ 4,650",
    taxes: "₹ 700 taxes & fees",
  },
]

