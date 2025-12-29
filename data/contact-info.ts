export interface ContactInfo {
  id: string
  type: string
  value: string
  description: string
  icon: string
}

export const contactInfo: ContactInfo[] = [
  {
    id: "phone-main",
    type: "phone",
    value: "+91-9350099593",
    description: "Main Office",
    icon: "Phone",
  },
  {
    id: "phone-bookings",
    type: "phone",
    value: "+91-9896006705",
    description: "Bookings",
    icon: "Phone",
  },
  {
    id: "email",
    type: "email",
    value: "hello@sharmajitravels.com",
    description: "Online support",
    icon: "Mail",
  },
  {
    id: "address",
    type: "address",
    value: "Karnal, Haryana",
    description: "Main Office",
    icon: "MapPin",
  },
]

