import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'
import { Truck, ShieldCheck } from 'lucide-react'

export function ProductInfo() {
  const { addItem } = useCart()

  return (
    <Card className="p-8 md:p-12">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-earth-900">$59.00</span>
            <span className="text-earth-500 text-sm font-medium">One-time purchase</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> In Stock
            </span>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold text-earth-700">Quantity</label>
            <div className="flex items-center gap-2 border border-bark-200 rounded-xl bg-white">
              <button className="flex w-10 h-10 items-center justify-center text-earth-600 hover:bg-earth-50">−</button>
              <span className="w-10 text-center font-medium text-earth-900">1</span>
              <button className="flex w-10 h-10 items-center justify-center text-earth-600 hover:bg-earth-50">+</button>
            </div>
          </div>
          <div className="pt-4 border-t border-bark-100 space-y-3">
            <div className="flex items-start gap-3 text-sm text-earth-600">
              <Truck className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
              <div>Free shipping on orders over $50</div>
            </div>
            <div className="flex items-start gap-3 text-sm text-earth-600">
              <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
              <div>30-day money-back guarantee</div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-80 space-y-4">
          <Button variant="primary" className="w-full py-4 text-lg shadow-lg shadow-earth-600/30" onClick={() => addItem({ id: 'board-1', name: 'SniffTrail Puzzle Board', price: 5900, image: '', type: 'board', scentId: 'board-1', quantity: 1 })}>
            Add to Cart
          </Button>
          <Button variant="outline" className="w-full py-4 text-lg" onClick={() => addItem({ id: 'board-1', name: 'SniffTrail Puzzle Board', price: 5900, image: '', type: 'board', scentId: 'board-1', quantity: 1 })}>
            Buy Now
          </Button>
        </div>
      </div>
    </Card>
  )
}
