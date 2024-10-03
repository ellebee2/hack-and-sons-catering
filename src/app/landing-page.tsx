'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { SEO } from "@/components/SEO"

const MotionSection = dynamic(() => import('framer-motion').then((mod) => mod.motion.section), { ssr: false });
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function LandingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const queryParams = new URLSearchParams(formData).toString()
    router.push(`/booking?${queryParams}`)
  }

  return (
    <main className="flex flex-col min-h-screen">
      <SEO 
        title="Hack & Sons Private Catering - Home"
        description="Exclusive private dining and catering services in Nashville. Elevate your culinary experience with Hack & Sons."
      />
      <Header />

      {/* Hero Section */}
      <MotionSection 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow py-12 sm:py-16 md:py-24 px-4 md:px-6 lg:py-32"
      >
        <div className="container mx-auto flex flex-col items-center text-center">
          <MotionH1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
          >
            Elevate Your Culinary Experience
          </MotionH1>
          <MotionP 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl"
          >
            Hack & Sons Private Catering brings gourmet cuisine and impeccable service to your most cherished events.
          </MotionP>
          <MotionDiv
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.6 }}
          >
            <Link href="/menu">
              <Button size="lg" className="mt-8 bg-black text-white hover:bg-gray-800">Explore Our Menus</Button>
            </Link>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-center">Services</h2>
          <Carousel className="w-full max-w-4xl mx-auto" autoplayInterval={5000}>
            <CarouselContent>
              {/* Private Dining */}
              <CarouselItem>
                <Card>
                  <CardHeader>
                    <CardTitle>Exclusive Private Dining</CardTitle>
                    <CardDescription>Intimate culinary experiences in the comfort of your home</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image 
                      src="/IMG_0708.jpg"
                      alt="Elegant private dining setup" 
                      width={600} 
                      height={400} 
                      priority
                      className="rounded-lg object-cover w-full h-64"
                    />
                    <p className="mt-4">Experience restaurant-quality dining in the intimacy of your home. Our expert chefs create personalized menus featuring exquisite dishes tailored to your preferences and dietary needs.</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Corporate Events */}
              <CarouselItem>
                <Card>
                  <CardHeader>
                    <CardTitle>Corporate Event Catering</CardTitle>
                    <CardDescription>Elevate your business gatherings with our professional service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image 
                      src="/4F15D43E-B750-41C6-AE9E-BD7810D78EF9.jpeg"
                      alt="Corporate event catering with elegantly plated salads"
                      width={600} 
                      height={400} 
                      className="rounded-lg object-cover object-bottom w-full h-64"
                    />
                    <p className="mt-4">Impress clients and colleagues with our sophisticated corporate catering. From power lunches to grand galas, we offer a range of options including innovative hors d'oeuvres and expertly crafted main courses.</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Weddings */}
              <CarouselItem>
                <Card>
                  <CardHeader>
                    <CardTitle>Unforgettable Wedding Feasts</CardTitle>
                    <CardDescription>Culinary magic for your special day</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image 
                      src="/BCB55080-0529-45D0-8A02-78C1BBEB49C2.jpeg"
                      alt="Elegant wedding table setting with candles and floral centerpieces" 
                      width={600} 
                      height={400} 
                      className="rounded-lg object-cover w-full h-64"
                    />
                    <p className="mt-4">Your wedding day deserves a menu as extraordinary as your love story. Our expert chefs craft bespoke menus that reflect your tastes and create lasting memories for you and your guests.</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">Additional Services</Button>
            </Link>
            <Link href="/booking" className="w-full sm:w-auto">
              <Button className="w-full bg-black text-white hover:bg-gray-800">Book Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section id="gallery" className="py-12 sm:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-center">Our Culinary Creations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Add more images or implement a carousel */}
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1249-mFPnlx1TJjGbU0teQquHRS9AvWBQCH.jpg" 
              alt="Gourmet meat dish with salad" 
              width={400} 
              height={300} 
              className="rounded-lg object-cover w-full h-64"
            />
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5553-VXeb0ldSphb81gAFisJPyDn0vFkony.jpg" 
              alt="Fresh cranberries" 
              width={400} 
              height={300} 
              className="rounded-lg object-cover w-full h-64"
            />
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0709-bNyuRdJvB4cqBUNrFFkjICQpqAmWSu.jpg" 
              alt="Gourmet scallop dish" 
              width={400} 
              height={300} 
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-4 py-2">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section for booking */}
      <section id="cta" className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready to Elevate Your Event?</h2>
          <p className="mb-8 text-lg">Book your private catering experience with Hack & Sons today.</p>
          <Link href="/booking" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-4 py-2">
            Book Now
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Client Experiences</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Exceptional Service</CardTitle>
                <CardDescription>Emily & James, Wedding Clients</CardDescription>
              </CardHeader>
              <CardContent>
                <p>&quot;Hack & Sons transformed our wedding into a culinary adventure. Our guests are still raving about the food months later!&quot;</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Corporate Excellence</CardTitle>
                <CardDescription>Sarah T., Marketing Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p>"Their attention to detail and innovative menu options impressed our international clients. Hack & Sons is now our go-to for all corporate events."</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Birthday Bash Success</CardTitle>
                <CardDescription>Michael R., Private Client</CardDescription>
              </CardHeader>
              <CardContent>
                <p>"The private chef experience for my 50th was unforgettable. Hack & Sons created a bespoke menu that perfectly captured my tastes."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form / CTA Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 md:px-6">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-center">Ready to Elevate Your Culinary Experience?</h2>
          <Card>
            <CardHeader>
              <CardTitle>Schedule Your Consultation</CardTitle>
              <CardDescription>Take the first step towards an unforgettable dining event</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                      aria-required="true"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      placeholder="Your email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      aria-required="true"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="event">Event Type</Label>
                    <Input 
                      id="event" 
                      placeholder="e.g., Wedding, Corporate Dinner, Birthday" 
                      value={formData.event} 
                      onChange={handleInputChange}
                      aria-required="true"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="message">Your Vision</Label>
                    <Input 
                      id="message" 
                      placeholder="Tell us about your dream event" 
                      value={formData.message} 
                      onChange={handleInputChange}
                      aria-required="true"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full bg-black text-white hover:bg-gray-800"
                  aria-label="Book Your Consultation"
                >
                  Book Your Consultation
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}