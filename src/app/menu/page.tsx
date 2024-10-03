'use client'

import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from 'framer-motion'

const menuCategories = [
  {
    name: "Hors d'oeuvres",
    items: [
      { name: "Seared Scallop", description: "with cauliflower purée and crispy prosciutto" },
      { name: "Beef Tartare", description: "on a parmesan crisp with truffle aioli" },
      { name: "Wild Mushroom Arancini", description: "with garlic aioli" },
      { name: "Smoked Salmon Blini", description: "with dill crème fraîche and caviar" }
    ]
  },
  {
    name: "Entrees",
    items: [
      { name: "Pan-Seared Duck Breast", description: "with cherry gastrique, roasted root vegetables" },
      { name: "Herb-Crusted Rack of Lamb", description: "with mint pesto, roasted fingerling potatoes" },
      { name: "Miso-Glazed Black Cod", description: "with bok choy and shiitake mushrooms" },
      { name: "Truffle Risotto", description: "with wild mushrooms and aged parmesan" }
    ]
  },
  {
    name: "Desserts",
    items: [
      { name: "Vanilla Bean Crème Brûlée", description: "with fresh berries" },
      { name: "Dark Chocolate Mousse", description: "with salted caramel and hazelnut praline" },
      { name: "Lemon Tart", description: "with Italian meringue and raspberry coulis" },
      { name: "Cheese Selection", description: "artisanal cheeses with house-made preserves and crackers" }
    ]
  }
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].name)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Our Culinary Creations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our signature dishes, crafted with passion and precision
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <Tabs defaultValue={menuCategories[0].name} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.name}
                  value={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className="bg-white text-black border-2 border-black hover:bg-gray-100 data-[state=active]:bg-gray-200 rounded-md"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {menuCategories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.items.map((item, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <Card>
                          <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription>{item.description}</CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Customized Menus</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Our menu is just a starting point. We specialize in creating bespoke culinary experiences tailored to your preferences and dietary requirements. Let's collaborate to craft the perfect menu for your event.
          </p>
        </div>
      </section>

      <footer className="border-t py-6">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold">Hack & Sons</h2>
              <p className="text-xs">Personal Chef | Private Catering</p>
            </div>
            <p className="text-sm leading-loose">
              © 2024 Hack & Sons Private Catering. Crafting culinary memories.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}