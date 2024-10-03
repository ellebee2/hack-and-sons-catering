import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let&apos;s create an unforgettable culinary experience together.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Fill out the form below and we&apos;ll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Your email" type="email" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="event">Event Type</Label>
                    <Input id="event" placeholder="e.g., Wedding, Corporate Dinner, Birthday" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="message">Your Message</Label>
                    <Input id="message" placeholder="Tell us about your event or inquiry" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}