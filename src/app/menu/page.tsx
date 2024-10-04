'use client'

import React, { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

type MenuItem = {
  name: string
  description: string
  price?: string
}

type MenuSection = {
  title: string
  items: MenuItem[]
}

const MenuCategory: React.FC<{ category: MenuSection }> = ({ category }) => (
  <Card className="mb-8 bg-background">
    <CardHeader>
      <CardTitle className="text-foreground">{category.title}</CardTitle>
    </CardHeader>
    <CardContent>
      {category.items.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-baseline">
            <h4 className="text-lg font-semibold text-foreground">{item.name}</h4>
            {item.price && <span className="text-sm text-muted-foreground">{item.price}</span>}
          </div>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </CardContent>
  </Card>
)

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("hors-doeuvres")

  const menuSections = {
    "hors-doeuvres": [
      {
        title: "Cold Hors d'Oeuvres",
        items: [
          { name: "Smoked Salmon Blini", description: "House-cured salmon, dill crème fraîche, caviar", price: "$24/dozen" },
          { name: "Caprese Skewers", description: "Cherry tomatoes, fresh mozzarella, basil, balsamic glaze", price: "$18/dozen" },
          { name: "Prosciutto-Wrapped Melon", description: "Cantaloupe, aged prosciutto, mint", price: "$22/dozen" },
        ]
      },
      {
        title: "Hot Hors d'Oeuvres",
        items: [
          { name: "Mini Crab Cakes", description: "Lump crab meat, remoulade sauce", price: "$28/dozen" },
          { name: "Bacon-Wrapped Dates", description: "Medjool dates, goat cheese, applewood-smoked bacon", price: "$20/dozen" },
          { name: "Mushroom Arancini", description: "Truffle-scented risotto balls, parmesan aioli", price: "$22/dozen" },
        ]
      }
    ],
    "entrees": [
      {
        title: "Seafood",
        items: [
          { name: "Pan-Seared Scallops", description: "Cauliflower purée, pancetta, Brussels sprout leaves", price: "$36" },
          { name: "Grilled Salmon", description: "Quinoa tabbouleh, preserved lemon, harissa yogurt", price: "$32" },
        ]
      },
      {
        title: "Meat",
        items: [
          { name: "Filet Mignon", description: "Truffle mashed potatoes, asparagus, red wine reduction", price: "$42" },
          { name: "Roasted Chicken", description: "Wild mushroom risotto, broccolini, jus", price: "$28" },
        ]
      },
      {
        title: "Vegetarian",
        items: [
          { name: "Eggplant Parmesan", description: "House-made marinara, fresh mozzarella, basil pesto", price: "$24" },
          { name: "Butternut Squash Ravioli", description: "Sage brown butter sauce, toasted pine nuts, parmesan", price: "$26" },
        ]
      }
    ],
    "desserts": [
      {
        title: "Desserts",
        items: [
          { name: "Chocolate Lava Cake", description: "Vanilla bean ice cream, raspberry coulis", price: "$12" },
          { name: "Lemon Tart", description: "Torched meringue, blueberry compote", price: "$10" },
          { name: "Tiramisu", description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa dust", price: "$11" },
        ]
      }
    ]
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <section className="py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground">
            Gourmet Creations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our curated selection of culinary masterpieces
          </p>
          <Link href="/booking" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Book a Tasting
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted">
              <TabsTrigger value="hors-doeuvres" className="data-[state=active]:bg-background">Hors d&apos;Oeuvres</TabsTrigger>
              <TabsTrigger value="entrees" className="data-[state=active]:bg-background">Entrées</TabsTrigger>
              <TabsTrigger value="desserts" className="data-[state=active]:bg-background">Desserts</TabsTrigger>
            </TabsList>
            <TabsContent value="hors-doeuvres">
              {menuSections["hors-doeuvres"].map((category, index) => (
                <MenuCategory key={index} category={category} />
              ))}
            </TabsContent>
            <TabsContent value="entrees">
              {menuSections["entrees"].map((category, index) => (
                <MenuCategory key={index} category={category} />
              ))}
            </TabsContent>
            <TabsContent value="desserts">
              {menuSections["desserts"].map((category, index) => (
                <MenuCategory key={index} category={category} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <div className="flex-grow"></div>

      <div className="w-full flex justify-center">
        <Footer />
      </div>
    </main>
  )
}