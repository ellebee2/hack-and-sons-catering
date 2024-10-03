"use client";

import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientButton } from "@/components/ClientButton"

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve the Nashville area and surrounding counties. For events outside this region, please contact us for availability and potential travel fees."
  },
  {
    question: "How far in advance should I book your services?",
    answer: "We recommend booking at least 2-3 months in advance for most events, and 6-12 months for weddings or large corporate events. However, we can sometimes accommodate last-minute requests, so don't hesitate to ask!"
  },
  {
    question: "Do you cater to dietary restrictions and food allergies?",
    answer: "Absolutely! We can accommodate a wide range of dietary needs including vegetarian, vegan, gluten-free, and various food allergies. Please inform us of any restrictions when planning your menu."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing varies depending on the type of event, number of guests, menu selection, and additional services required. We offer customized quotes for each event to ensure you get exactly what you need within your budget."
  },
  {
    question: "Do you provide rentals such as tables, chairs, and linens?",
    answer: "While we don't directly provide rentals, we work closely with trusted rental companies and can coordinate all necessary rentals for your event as part of our service."
  },
  {
    question: "Can we schedule a tasting before booking?",
    answer: "Yes, we offer tastings for weddings and large events. There is a fee for the tasting, which is applied to your final bill if you book with us."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy varies depending on the size of the event and how far in advance you cancel. Please refer to your contract for specific details, or contact us for more information."
  },
  {
    question: "Do you offer bar services?",
    answer: "Yes, we offer full bar services including bartenders, mixologists, and a range of beverage packages. We can also work with your provided alcohol if you prefer."
  }
]

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our catering services
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <svg 
                    className={`w-6 h-6 transition-transform ${expandedIndex === index ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </CardTitle>
              </CardHeader>
              {expandedIndex === index && (
                <CardContent>
                  <p>{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            If you're ready to create an unforgettable culinary experience, use our booking system to get started!
          </p>
          <ClientButton className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book Now
          </ClientButton>
        </div>
      </section>

      <Footer />
    </main>
  )
}