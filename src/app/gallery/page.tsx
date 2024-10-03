'use client'

import React from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Image from 'next/image'
import Link from 'next/link'

const images = [
  { src: "/IMG_0708.jpg", alt: "Elegant table setting" },
  { src: "/IMG_0709.jpg", alt: "Gourmet scallop dish" },
  { src: "/img_1387.jpg", alt: "Beautifully plated appetizers" },
  { src: "/IMG_1189.jpg", alt: "Gourmet dish presentation" },
  { src: "/IMG_5554.jpg", alt: "Colorful vegetable dish" },
  { src: "/IMG_6055.jpg", alt: "Elegant plated dessert" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-12 sm:py-16 md:py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 sm:mb-6">
            Our Culinary Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A visual feast of our gourmet creations and events
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Experience Our Artistry</h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg mb-8">
            Every dish we create is a work of art, crafted with passion and precision. From intimate dinners to grand galas, we bring culinary excellence to every event.
          </p>
          <Link href="/booking" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-4 py-2">
            Book Your Consultation
          </Link>
        </div>
      </section>

      <div className="flex-grow"></div>

      <div className="w-full flex justify-center">
        <Footer />
      </div>
    </main>
  )
}