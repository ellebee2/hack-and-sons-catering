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
  // ... other FAQ items ...
  {
    question: "Do you offer tastings?",
    answer: "Yes, we offer tastings for weddings and large events. There&apos;s a small fee for the tasting, which is credited towards your final bill if you book with us."
  },
]

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
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
            If you&apos;re ready to create an unforgettable culinary experience, use our booking system to get started!
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