'use client'

import Image from 'next/image'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting culinary excellence since 2016
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">A Legacy of Flavor</h2>
              <p className="mb-4">
                Hack & Sons Catering was born out of a passion for food and a dedication to service. Founded by Cameron Hack in 2016, our family-owned business has quickly become a prominent name in the Nashville culinary scene.
              </p>
              <p className="mb-4">
                What started as a vision to bring restaurant-quality dining experiences into people&apos;s homes has grown into a premier catering service, known for our innovative menus, impeccable presentation, and unwavering commitment to quality.
              </p>
              <p>
                Today, with Cameron at the helm and supported by a talented team including Laura and Roman Hack, we continue to push the boundaries of culinary excellence while staying true to our roots of warm, personalized service that Nashville has come to love.
              </p>
            </div>
            <div>
              <Image 
                src="/IMG_2019.JPG" 
                alt="Hack & Sons team preparing a gourmet meal" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Quality Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We source the finest local and seasonal ingredients to ensure every dish is a celebration of flavor.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Culinary Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our chefs are constantly exploring new techniques and flavor combinations to surprise and delight our clients.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Personalized Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We believe in creating bespoke experiences that reflect the unique vision of each client we serve.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Cameron Hack</CardTitle>
                <CardDescription>Owner & Executive Chef</CardDescription>
              </CardHeader>
              <CardContent>
                <p>With a passion for culinary excellence and years of experience in top restaurants, Cameron brings his expertise and creativity to every event, ensuring an unforgettable dining experience for all our clients.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Laura Hack</CardTitle>
                <CardDescription>Operations Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Laura&apos;s keen eye for detail and extensive background in event management ensures that every aspect of your event runs smoothly, from the initial planning stages to the final moments.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Roman Hack</CardTitle>
                <CardDescription>Head of Culinary Innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Roman&apos;s passion for exploring new flavors and techniques keeps Hack & Sons at the forefront of culinary trends, constantly pushing the boundaries of what&apos;s possible in catering and private dining.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="max-w-3xl mx-auto text-lg">
            At Hack & Sons, we&apos;re not just serving food; we&apos;re creating memories. Whether it&apos;s an intimate dinner for two or a grand gala for thousands, we approach every event with the same dedication to excellence and attention to detail.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}