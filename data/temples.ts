export interface Temple {
  id: string
  name: string
  image: string
  location: string
  description: string
  timings: string
  entryFee: string
  distance: string
}

export const temples: Temple[] = [
  {
    id: "tirumala-temple",
    name: "Sri Venkateswara Temple",
    image: "/images/temples/tirupati.webp",
    location: "Tirumala, Tirupati",
    description: "The richest and most visited temple in the world, dedicated to Lord Venkateswara.",
    timings: "3:00 AM - 12:00 AM",
    entryFee: "₹300 for Special Entry",
    distance: "22 km from Tirupati",
  },
  {
    id: "padmavathi-temple",
    name: "Sri Padmavathi Temple",
    image: "/images/temples/padmavathi.jpg",
    location: "Tiruchanur, Tirupati",
    description: "Temple dedicated to Goddess Padmavathi, consort of Lord Venkateswara.",
    timings: "6:00 AM - 8:00 PM",
    entryFee: "Free Entry",
    distance: "5 km from Tirupati",
  },
  {
    id: "kapila-theertham",
    name: "Kapila Theertham",
    image: "/images/temples/kapilithirtham.webp",
    location: "Tirupati",
    description: "Ancient Shiva temple with a beautiful waterfall at the foothills of Tirumala.",
    timings: "6:00 AM - 6:00 PM",
    entryFee: "Free Entry",
    distance: "3 km from Tirupati",
  },
  {
    id: "govindaraja-swamy",
    name: "Govindaraja Swamy Temple",
    image: "/images/temples/govind.jpg",
    location: "Tirupati",
    description: "Ancient temple dedicated to Lord Vishnu, built by the Vijayanagara kings.",
    timings: "6:00 AM - 8:00 PM",
    entryFee: "Free Entry",
    distance: "1 km from Tirupati",
  },
  {
    id: "srikalahasti",
    name: "Sri Kalahasti Temple",
    image: "/images/temples/kalahasti.jpg",
    location: "Sri Kalahasti",
    description: "Famous Shiva temple known for Rahu-Ketu pooja and air lingam.",
    timings: "6:00 AM - 8:30 PM",
    entryFee: "Free Entry",
    distance: "36 km from Tirupati",
  },
  {
    id: "alamelu-mangapuram",
    name: "Alamelu Mangapuram",
    image: "/images/temples/mangapuram.jpg",
    location: "Near Chandragiri",
    description: "Temple dedicated to Goddess Alamelu Manga, consort of Lord Venkateswara.",
    timings: "7:00 AM - 7:00 PM",
    entryFee: "Free Entry",
    distance: "15 km from Tirupati",
  },
]

