import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { contactInfo } from "@/data/contact-info"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Our Fleet", href: "/vehicles" },
  { name: "Services", href: "#" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "#" },
]

const serviceLinks = [
  { name: "Airport Transfers", href: "#" },
  { name: "Temple Tours", href: "/temples" },
  { name: "Corporate Travel", href: "#" },
  { name: "Outstation Trips", href: "#" },
  { name: "Luxury Bus Rentals", href: "#" },
]

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
]

const socialLinks = [
  { name: "Facebook", href: "#", icon: <Facebook className="h-5 w-5" /> },
  { name: "Instagram", href: "#", icon: <Instagram className="h-5 w-5" /> },
  { name: "Twitter", href: "#", icon: <Twitter className="h-5 w-5" /> },
  { name: "LinkedIn", href: "#", icon: <Linkedin className="h-5 w-5" /> },
]

const phoneNumbers = contactInfo.filter((info) => info.type === "phone")

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-1 mb-6">
              <div className="p-2 rounded-lg">
                <Image
                  src="/images/SJlogo1.png"
                  alt="SJ Travels Logo"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              </div>
              <span className="-ml-4 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                SJ Travels
              </span>
            </div>

            <p className="text-gray-400 mb-6">
              Providing comfortable and affordable travel solutions in Tirupati since 2010.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-800 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              {phoneNumbers.map((phone) => (
                <li key={phone.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-indigo-400 font-medium">{phone.value}</p>
                    <p className="text-gray-500 text-sm">{phone.description}</p>
                  </div>
                </li>
              ))}

              {contactInfo
                .filter((info) => info.type === "email" || info.type === "address")
                .map((info) => {
                  const IconComponent = info.type === "email" ? Mail : MapPin

                  return (
                    <li key={info.id} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-indigo-400 font-medium">{info.value}</p>
                        <p className="text-gray-500 text-sm">{info.description}</p>
                      </div>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm mb-1">
              Made with ❤️ by{" "}
              <a
                href="https://github.com/deepanshu1420"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
              >
                Deepanshu Sharma
              </a>
            </p>

            <p className="text-gray-500">
              © 2026 Sharma Ji Travels. All rights reserved.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
