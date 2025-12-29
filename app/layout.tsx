import type React from "react"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import AOSInit from "@/components/aos-init"
import { Metadata } from "next"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", // Optimize font display
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: {
    default: "Sharma Ji Travels - Comfortable & Affordable Travel",
    template: "%s | Sharma Ji Travels"
  },
  description: "Premium car and bus rentals in Tirupati for all your travel needs. Book airport transfers, temple tours, and corporate travel services.",
  keywords: ["Tirupati car rental", "Tirumala temple tour", "Tirupati taxi service", "SJ Travels", "car rental Tirupati", "bus rental Tirupati"],
  authors: [{ name: "Sharma Ji Travels" }],
  creator: "Sharma Ji Travels",
  publisher: "Sharma Ji Travels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sjtravelsnext.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sharma Ji Travels - Comfortable & Affordable Travel",
    description: "Premium car and bus rentals in Tirupati for all your travel needs",
    url: "https://sjtravelsnext.vercel.app/",
    siteName: "Sharma Ji Travels",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharma Ji Travels - Comfortable & Affordable Travel",
    description: "Premium car and bus rentals in Tirupati for all your travel needs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  )
}
