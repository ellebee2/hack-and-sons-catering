import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (service: string) => {
    if (expandedService === service) {
      setExpandedService(null)
    } else {
      setExpandedService(service)
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Services Hero Section */}
      <section className="py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Our Bespoke Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, Hack & Sons brings culinary excellence to every event.
          </p>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          {/* Private Dining */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-3xl">Private Dining</CardTitle>
              <CardDescription>Intimate culinary experiences in the comfort of your home</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Image 
                    src="/IMG_0708.jpg"
                    alt="Elegant private dining setup" 
                    width={600} 
                    height={400} 
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
                <div>
                  <p className="mb-4">Experience restaurant-quality dining in the intimacy of your home. Our expert chefs create personalized menus featuring exquisite dishes tailored to your preferences and dietary needs.</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Customized menu planning</li>
                    <li>Expert chef service in your home</li>
                    <li>Fine dining presentation</li>
                    <li>Wine pairing recommendations</li>
                    <li>Dietary accommodations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full md:w-auto">Book a Private Chef</Button>
            </CardFooter>
          </Card>

          {/* Corporate Events */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-3xl">Corporate Events</CardTitle>
              <CardDescription>Elevate your business gatherings with our professional service</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Image 
                    src="/img_1387.jpg"
                    alt="Corporate event catering"
                    width={600} 
                    height={400} 
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
                <div>
                  <p className="mb-4">Impress clients and colleagues with our sophisticated corporate catering. From power lunches to grand galas, we offer a range of options including innovative hors d'oeuvres and expertly crafted main courses.</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Business lunch and dinner catering</li>
                    <li>Conference and seminar refreshments</li>
                    <li>Product launch events</li>
                    <li>Holiday party catering</li>
                    <li>Team building culinary experiences</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full md:w-auto">Request a Quote</Button>
            </CardFooter>
          </Card>

          {/* Weddings */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-3xl">Weddings</CardTitle>
              <CardDescription>Culinary magic for your special day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Image 
                    src="/gettyimages-1177485677-612x612.jpg"
                    alt="Elegant outdoor wedding table setting" 
                    width={600} 
                    height={400} 
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
                <div>
                  <p className="mb-4">Your wedding day deserves a menu as extraordinary as your love story. Our expert chefs craft bespoke menus that reflect your tastes and create lasting memories for you and your guests.</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Customized wedding menu design</li>
                    <li>Cocktail hour hors d'oeuvres</li>
                    <li>Plated or buffet-style dinner service</li>
                    <li>Wedding cake and dessert options</li>
                    <li>Late-night snack offerings</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full md:w-auto">Plan Your Wedding Menu</Button>
            </CardFooter>
          </Card>

          {/* Additional Services */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Additional Services</CardTitle>
              <CardDescription>Complementary offerings to enhance your event</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Beverage and bar service",
                  "Rental coordination (tables, chairs, linens)",
                  "Staff hiring and management",
                  "Event styling and decor assistance",
                  "Custom menu creation",
                  "Banquet services",
                  "Luncheon catering",
                  "Wine pairing services",
                  "Hors d'oeuvres selection",
                  "Cocktail hour planning",
                  "Cooking classes"
                ].map((service, index) => (
                  <li key={index} className="flex flex-col">
                    <button 
                      onClick={() => toggleService(service)}
                      className="flex items-center justify-between w-full text-left p-2 hover:bg-gray-100 rounded"
                    >
                      <span className="flex items-center">
                        <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {service}
                      </span>
                      <svg 
                        className={`w-4 h-4 transition-transform ${expandedService === service ? 'transform rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    {expandedService === service && (
                      <p className="mt-2 pl-8 text-sm text-gray-600">
                        Detailed description of {service.toLowerCase()} goes here. Explain the benefits and what's included.
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Event?</h2>
          <p className="mb-8 text-lg">Contact us to start planning your unforgettable culinary experience.</p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-gray-100 h-10 px-4 py-2">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}