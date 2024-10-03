'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from 'framer-motion'

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (service: string) => {
    if (expandedService === service) {
      setExpandedService(null)
    } else {
      setExpandedService(service)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Services Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-12 sm:py-16 md:py-24 px-4 md:px-6 lg:py-32 bg-muted"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 sm:mb-6">
            Our Bespoke Services
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, Hack & Sons brings culinary excellence to every event.
          </p>
        </div>
      </motion.section>

      {/* Detailed Services Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-12 sm:py-16 px-4 md:px-6"
      >
        <div className="container mx-auto">
          {/* Private Dining */}
          <motion.div variants={itemVariants}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">Private Chef Experience</CardTitle>
                <CardDescription className="text-sm sm:text-base">Elevate your home dining with our expert chefs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm sm:text-base">Experience restaurant-quality cuisine in the comfort of your own home. Our private chef service brings the fine dining experience directly to you, creating bespoke menus tailored to your tastes and dietary requirements.</p>
                <ul className="list-disc pl-5 mb-4 text-sm sm:text-base">
                  <li>Customized menu planning</li>
                  <li>Expert wine pairing recommendations</li>
                  <li>Impeccable service and presentation</li>
                  <li>Accommodations for dietary restrictions and preferences</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/booking" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800">Book a Private Chef</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Add more service cards here (Corporate Events, Weddings, etc.) */}

          {/* Additional Services */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">Additional Services</CardTitle>
                <CardDescription className="text-sm sm:text-base">Complementary offerings to enhance your event</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Beverage and bar service",
                      description: "Curated wine lists, craft cocktails, and non-alcoholic options tailored to your event. Includes professional bartenders and all necessary bar equipment."
                    },
                    {
                      title: "Rental coordination",
                      description: "We handle the logistics of renting tables, chairs, linens, and decor items, ensuring a cohesive look that matches your event's style."
                    },
                    {
                      title: "Staff hiring and management",
                      description: "Our experienced team of servers, bartenders, and support staff ensure smooth service throughout your event."
                    },
                    {
                      title: "Event styling and decor",
                      description: "From floral arrangements to lighting design, we add those finishing touches that elevate your event's ambiance."
                    },
                    {
                      title: "Custom menu creation",
                      description: "Work directly with our chefs to design a unique menu that reflects your tastes and dietary needs."
                    },
                    {
                      title: "Wine pairing services",
                      description: "Our sommeliers select the perfect wines to complement each course, enhancing the overall dining experience."
                    },
                    {
                      title: "Hors d'oeuvres selection",
                      description: "Impress your guests with a variety of innovative and delicious bite-sized appetizers, perfect for cocktail hours or receptions."
                    },
                    {
                      title: "Cooking classes",
                      description: "Interactive culinary experiences led by our expert chefs. Great for team building or private events."
                    }
                  ].map((service, index) => (
                    <li key={index} className="flex flex-col">
                      <button 
                        onClick={() => toggleService(service.title)}
                        className="flex items-center justify-between w-full text-left p-2 hover:bg-gray-100 rounded"
                      >
                        <span className="flex items-center">
                          <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          {service.title}
                        </span>
                        <svg 
                          className={`w-4 h-4 transition-transform ${expandedService === service.title ? 'transform rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      {expandedService === service.title && (
                        <p className="mt-2 pl-8 text-sm text-gray-600">
                          {service.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}