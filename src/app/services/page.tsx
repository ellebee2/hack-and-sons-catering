'use client'

import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    title: "Private Dining",
    description: "Intimate culinary experiences in the comfort of your home",
    details: "Our expert chefs create personalized menus featuring exquisite dishes tailored to your preferences and dietary needs."
  },
  {
    title: "Corporate Events",
    description: "Elevate your business gatherings with our professional service",
    details: "From power lunches to grand galas, we offer a range of options including innovative hors d'oeuvres and expertly crafted main courses."
  },
  {
    title: "Weddings",
    description: "Culinary magic for your special day",
    details: "Our expert chefs craft bespoke menus that reflect your tastes and create lasting memories for you and your guests."
  }
]

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (title: string) => {
    setExpandedService(expandedService === title ? null : title)
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our range of catering and culinary services
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle 
                    className="text-2xl cursor-pointer"
                    onClick={() => toggleService(service.title)}
                  >
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                {expandedService === service.title && (
                  <CardContent>
                    <p>{service.details}</p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}