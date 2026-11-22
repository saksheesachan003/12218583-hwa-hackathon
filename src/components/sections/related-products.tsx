import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'

const RELATED = [
  { id: 'forest', name: 'Forest Trail Refill', price: 18, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80&auto=format&fit=crop' },
  { id: 'herb', name: 'Herb Trail Refill', price: 18, image: 'https://images.unsplash.com/photo-1591706810935-466319864f0e?w=500&q=80&auto=format&fit=crop' },
  { id: 'animal', name: 'Other-Animal Trail Refill', price: 18, image: 'https://images.unsplash.com/photo-1552053832-13006d9d150b?w=500&q=80&auto=format&fit=crop' },
  { id: 'expansion', name: 'Trail Extender Pack', price: 29, image: 'https://images.unsplash.com/photo-1602665693980-789a6f8a9c18?w=500&q=80&auto=format&fit=crop' },
]

export function RelatedProducts() {
  const { addItem } = useCart()

  return (
    <section className="section bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Related Products</h2>
          <p className="text-earth-500 text-sm">Complete your scent trail</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {RELATED.map((p) => (
            <Card key={p.id} className="group hover:border-brand-500/50">
              <CardImage src={p.image} alt={p.name} />
              <CardContent className="pt-5">
                <h3 className="text-lg font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-xl font-bold text-earth-900">${p.price}</span>
                </div>
                <Button variant="outline" className="w-full" onClick={() => addItem({ id: p.id, name: p.name, price: p.price * 100, image: p.image, type: 'subscription', scentId: p.id, quantity: 1 })}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
