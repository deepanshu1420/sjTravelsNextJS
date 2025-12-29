export interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  date: string
  comment: string
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    avatar: "RK",
    rating: 5,
    date: "March 15, 2024",
    comment:
      "Excellent service! The driver was punctual and the car was very clean. Will definitely use SJ Travels again for my next trip to Tirupati.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "PS",
    rating: 4,
    date: "February 28, 2025",
    comment:
      "We hired a Toyota Innova for our family trip. The vehicle was comfortable and the driver was very professional. Good experience overall.",
  },
  {
    id: 3,
    name: "Suresh Goel",
    avatar: "SG",
    rating: 5,
    date: "January 10, 2025",
    comment:
      "Used their services for a corporate event. The Force Urbania was perfect for our team. The booking process was smooth and the service was excellent.",
  },
  {
    id: 4,
    name: "Lakshmi Devi",
    avatar: "LD",
    rating: 5,
    date: "December 5, 2024",
    comment:
      "We booked a Swift Dzire for our temple visit. The driver was knowledgeable about all the local temples and helped us plan our itinerary. Highly recommended!",
  },
  {
    id: 5,
    name: "Venkat Rao",
    avatar: "VR",
    rating: 4,
    date: "November 20, 2023",
    comment:
      "Good service at a reasonable price. The vehicle was comfortable and well-maintained. Will use their services again.",
  },
]

