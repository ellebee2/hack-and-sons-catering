'use client'

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import CalendlyWidget from "@/components/CalendlyWidget";

function BookingContent() {
  const searchParams = useSearchParams();
  const [calendlyUrl, setCalendlyUrl] = useState('');
  useEffect(() => {
    const name = searchParams?.get('name') || '';
    const email = searchParams?.get('email') || '';
    const event = searchParams?.get('event') || '';
    const message = searchParams?.get('message') || '';

    const baseUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '';
    const queryParams = new URLSearchParams({
      name,
      email,
      a1: event,
      a2: message
    }).toString();

    setCalendlyUrl(`${baseUrl}?${queryParams}`);
  }, [searchParams]);

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Schedule a Consultation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards your perfect culinary experience with Hack & Sons
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          {calendlyUrl && <CalendlyWidget url={calendlyUrl} />}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Schedule a Consultation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards your perfect culinary experience with Hack & Sons
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <BookingContent />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}