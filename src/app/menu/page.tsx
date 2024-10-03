'use client'

import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from 'framer-motion'

const menuCategories = [
  "Hors d'oeuvres",
  "Entrees",
  "Desserts"
]

const menuItems = {
  "Hors d'oeuvres": [
    { name: "Seared Scallop", description: "with cauliflower purée and crispy prosciutto" },
    { name: "Beef Tartare", description: "on a parmesan crisp with truffle aioli" },
    { name: "Wild Mushroom Arancini", description: "with garlic aioli" },
    { name: "Smoked Salmon Blini", description: "with dill crème fraîche and caviar" }
  ],
  "Entrees": [
    { name: "Pan-Seared Duck Breast", description: "with cherry gastrique, roasted root vegetables" },
    { name: "Herb-Crusted Rack of Lamb", description: "with mint pesto, roasted fingerling potatoes" },
    { name: "Miso-Glazed Black Cod", description: "with bok choy and shiitake mushrooms" },
    { name: "Truffle Risotto", description: "with wild mushrooms and aged parmesan" }
  ],
  "Desserts": [
    { name: "Vanilla Bean Crème Brûlée", description: "with fresh berries" },
    { name: "Dark Chocolate Mousse", description: "with salted caramel and hazelnut praline" },
    { name: "Lemon Tart", description: "with Italian meringue and raspberry coulis" },
    { name: "Cheese Selection", description: "artisanal cheeses with house-made preserves and crackers" }
  ]
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0])

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-24 px-4 md:px-6 lg:py-32 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our culinary creations
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex justify-center mb-8">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 mx-2 rounded-md ${
                  activeCategory === category ? 'bg-black text-white' : 'bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              {menuItems[activeCategory as keyof typeof menuItems].map((item: { name: string; description: string }, index: number) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}