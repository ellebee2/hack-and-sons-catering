import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import styles from './Header.module.css'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
  ]

  return (
    <header className={styles.header}>
      <div className="container flex h-16 items-center">
        <div className="flex items-center flex-1">
          <Link href="/" className={styles.logo}>
            <span className={`${styles.logoMain} dark:text-white`}>HACK <span className={styles.ampersand}>&</span> SONS</span>
            <span className={`${styles.logoTagline} dark:text-gray-300`}>Personal Chef | Private Catering</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium hover:underline">
              {item.label}
            </Link>
          ))}
          <Link href="/booking">
            <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">Book Now</Button>
          </Link>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle />
              <div className="mt-4">
                <Link href="/booking" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">Book Now</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}