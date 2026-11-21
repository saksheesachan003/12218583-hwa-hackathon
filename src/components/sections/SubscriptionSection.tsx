import { motion } from 'framer-motion'
import { TreePine, Leaf, PawPrint } from 'lucide-react'
import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'

const COLLECTIONS = [
  {
    id: 'forest',
    icon: <TreePine className="w-5 h-5" />,
    name: 'Forest Trail',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80&auto=format&fit=crop',
    body: 'Earthy pine, damp moss, and cedarwood — a walk through the woods in every pouch.',
    price: 18,
  },
  {
    id: 'herb',
    icon: <Leaf className="w-5 h-5" />,
    name: 'Herb Trail',
    image: 'https://images.unsplash.com/photo-1591706810935-466319864f0e?w=600&q=80&auto=format&fit=crop',
    body: 'Fresh lavender, rosemary, and mint — a garden breeze your dog will love to track.',
    price: 18,
  },
  {
    id: 'animal',
    icon: <PawPrint className="w-5 h-5" />,
    name: 'Other-Animal Trail',
    image: 'https://images.unsplash.com/photo-1552053832-13006d9d150b?w=600&q=80&auto=format&fit=crop',
    body: 'Subtle wildlife scents that awaken your dog\u2019s natural tracking instincts.',
    price: 18,
  },
]

export function SubscriptionSection() {
  const { addItem } = useCart()

  return (
    <section className="section relative overflow-hidden" id="subscription">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">A New Adventure, Delivered Every Month</h2>
          <p className="text-earth-500 max-w-2xl mx-auto text-lg">
            Subscribe to monthly scent-pouch refill packs. New collections arrive on schedule so the trail never goes cold.
            Scented pouches are enrichment accessories — not edible treats.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {COLLECTIONS.map((collection) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: COLLECTIONS.indexOf(collection) * 0.1 }}
              className="group relative"
            >
              <Card className="group-hover:border-brand-500/50">
                <CardImage src={collection.image} alt={collection.name} />
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-earth-500 uppercase tracking-wider">
                      Monthly refill
                    </span>
                    <span className="text-sm font-bold text-earth-900">${collection.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    {collection.icon}
                    <h3 className="text-lg font-bold">{collection.name}</h3>
                  </div>
                  <p className="text-earth-600 text-sm mb-6 line-clamp-3">{collection.body}</p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      addItem({
                        id: collection.id,
                        name: `${collection.name} Scent-Pouch Pack`,
                        price: collection.price * 100,
                        image: collection.image,
                        type: 'subscription',
                        scentId: collection.id,
                        quantity: 1,
                      })
                    }
                  >
                    Explore pack
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-earth-600 p-10 md:p-16 text-center border border-bark-200/50"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Start a monthly scent trail</h3>
          <p className="text-earth-100/90 mb-8 max-w-xl mx-auto text-sm">
            Choose your collection and delivery frequency. Pause or cancel anytime. Each pack is scent-only enrichment — never food.
          </p>
          <Button asChild variant="primary" className="w-auto">
            <a href="/shop">Subscribe now</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
