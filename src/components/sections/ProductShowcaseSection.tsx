import { motion } from 'framer-motion'
import { ShoppingBag, Leaf, RotateCw, Plus } from 'lucide-react'
import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'

const PRODUCTS = [
  {
    id: 'board',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&q=80&auto=format&fit=crop',
    icon: <ShoppingBag className="w-5 h-5" />,
    name: 'SniffTrail Puzzle Board',
    type: 'board' as const,
    price: 59,
    desc: 'Reusable scent-puzzle board with movable compartments, sliders, flip lids, and latches.',
  },
  {
    id: 'scent',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80&auto=format&fit=crop',
    icon: <Leaf className="w-5 h-5" />,
    name: 'Scent-Pouch Refill Packs',
    type: 'subscription' as const,
    price: 18,
    desc: 'Monthly scent collections — Forest Trail, Herb Trail, and Other-Animal Trail.',
  },
  {
    id: 'expansion',
    image: 'https://images.unsplash.com/photo-1602665693980-789a6f8a9c18?w=600&q=80&auto=format&fit=crop',
    icon: <RotateCw className="w-5 h-5" />,
    name: 'Puzzle Expansion Pack',
    type: 'expansion' as const,
    price: 29,
    desc: 'Extra compartments and components to expand your board for advanced sniffers.',
  },
]

export function ProductShowcaseSection() {
  const { addItem } = useCart()

  return (
    <section className="section relative overflow-hidden" id="showcase">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Everything for Their Next Adventure</h2>
          <p className="text-earth-500 max-w-2xl mx-auto text-lg">
            One board, endless scents, and upgrades for dogs who've mastered the basics. Real pricing — configure as needed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: PRODUCTS.indexOf(product) * 0.1 }}
              className="group relative"
            >
              <Card className="group-hover:border-brand-500/50 hover:-translate-y-2 transition-all">
                <CardImage src={product.image} alt={product.name} />
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    {product.icon}
                    <span className="text-xs font-semibold text-earth-500 uppercase tracking-wider">
                      {product.type === 'subscription' ? 'Monthly refill' : product.type === 'expansion' ? 'Expansion' : 'One-time purchase'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-earth-600 text-sm mb-6 leading-relaxed line-clamp-2">{product.desc}</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-2xl font-bold text-earth-900">${product.price}</span>
                    <span className="text-sm text-earth-500">{product.type === 'subscription' ? '/mo' : ''}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price * 100,
                        image: product.image,
                        type: product.type,
                        scentId: product.id,
                        quantity: 1,
                      })
                    }
                  >
                    <Plus className="w-4 h-4 mr-2" /> Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
