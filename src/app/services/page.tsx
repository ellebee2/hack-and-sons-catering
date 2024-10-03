'use client'

import React from 'react';
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const ServiceCard: React.FC<{ title: string; description: string; items: string[] }> = ({ title, description, items }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="items">
          <AccordionTrigger>View Details</AccordionTrigger>
          <AccordionContent>
            <ul className="mt-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-center mb-2">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
);

export default function ServicesPage() {
  const services = [
    {
      title: "Private Dining",
      description: "Intimate culinary experiences in your home",
      items: [
        "Personalized menu planning",
        "Professional chef service",
        "Elegant table settings",
        "Wine pairing options"
      ]
    },
    {
      title: "Corporate Events",
      description: "Impress clients and colleagues",
      items: [
        "Customized menus for any occasion",
        "Buffet or plated service options",
        "On-site catering staff",
        "Corporate branding integration"
      ]
    },
    {
      title: "Wedding Feasts",
      description: "Culinary magic for your special day",
      items: [
        "Bespoke menu design",
        "Tasting sessions",
        "Dietary accommodation",
        "Cake and dessert options"
      ]
    },
    {
      title: "Cocktail Receptions",
      description: "Elevate your social gatherings",
      items: [
        "Gourmet hors d'oeuvres",
        "Signature cocktails",
        "Professional mixologists",
        "Themed menu options"
      ]
    },
    {
      title: "Cooking Classes",
      description: "Learn from our master chefs",
      items: [
        "Hands-on instruction",
        "Ingredient selection tips",
        "Culinary techniques",
        "Wine pairing advice"
      ]
    },
    {
      title: "Bespoke Menu Design",
      description: "Tailored to your tastes and dietary needs",
      items: [
        "Personalized consultation",
        "Seasonal ingredient focus",
        "Dietary accommodation",
        "Wine and beverage pairing"
      ]
    },
    {
      title: "Holiday Celebrations",
      description: "Festive feasts for special occasions",
      items: [
        "Traditional and modern holiday menus",
        "Themed decorations",
        "Special dietary options",
        "Take-home packaging available"
      ]
    },
    {
      title: "Gourmet Meal Prep",
      description: "Chef-prepared meals for busy professionals",
      items: [
        "Weekly meal planning",
        "Customized portion sizes",
        "Nutritionist-approved options",
        "Convenient packaging and delivery"
      ]
    },
    {
      title: "Food and Wine Pairing Events",
      description: "Curated experiences for connoisseurs",
      items: [
        "Expert-led tastings",
        "Sourcing of rare and unique wines",
        "Educational components",
        "Themed pairing events"
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Our Bespoke Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Elevate your culinary experience with our tailored catering solutions
          </p>
          <Link href="/booking" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Book a Consultation
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <div className="flex-grow"></div>

      <div className="w-full flex justify-center">
        <Footer />
      </div>
    </main>
  )
}