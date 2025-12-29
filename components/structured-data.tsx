export function generateHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sharma Ji Travels",
    url: "https://travelstt.vercel.app/",
    logo: "https://travelstt.vercel.app/logo.png",
    description: "Premium car and bus rentals in Tirupati for all your travel needs",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tirupati",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9391711883",
      contactType: "customer service",
    },
    sameAs: ["https://www.facebook.com/SJtravels", "https://www.instagram.com/SJtravels", "https://twitter.com/SJtravels"],
  }
}

export function generateVehiclePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "Swift Dzire",
          description: "Comfortable sedan for family trips",
          offers: {
            "@type": "Offer",
            price: "17",
            priceCurrency: "INR",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            url: "https://travelstt.vercel.app/vehicles/swift-dzire",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Toyota Innova",
          description: "Spacious SUV for group travel",
          offers: {
            "@type": "Offer",
            price: "22",
            priceCurrency: "INR",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            url: "https://travelstt.vercel.app/vehicles/toyota-innova",
          },
        },
      },
    ],
  }
}

export function generateTemplePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Sri Venkateswara Temple",
    description: "The richest and most visited temple in the world, dedicated to Lord Venkateswara.",
    url: "https://travelstt.vercel.app/temples/tirumala-temple",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tirumala",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.6833",
      longitude: "79.3500",
    },
    openingHours: "Mo-Su 03:00-24:00",
  }
}
