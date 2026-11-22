import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Truck, ShieldCheck } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'

export function CartDrawer() {
  const { items, total, removeItem, updateQuantity, closeCart } = useCart()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ translateX: '100%' }}
            animate={{ translateX: 0 }}
            exit={{ translateX: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[61] w-full max-w-md bg-white shadow-2xl shadow-black/20 flex flex-col"
            aria-label="Shopping cart"
          >
            <div className="p-6 border-b border-bark-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-earth-900">Your Cart</h2>
              <button
                onClick={closeCart}
                className="w-8 h-8 rounded-full bg-earth-50 flex items-center justify-center hover:bg-earth-100 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingCart className="w-16 h-16 text-earth-200 mx-auto mb-6" />
                  <h3 className="text-lg font-bold text-earth-900 mb-2">Your cart is empty</h3>
                  <p className="text-earth-500 mb-8">SniffTrail goodies will appear here when you add them.</p>
                  <Button variant="primary" className="w-auto" onClick={closeCart}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onRemove={() => removeItem(item.id)}
                        onQuantityChange={(q) => updateQuantity(item.id, q)}
                      />
                    ))}
                  </div>

                  <div className="mt-8 border-t border-bark-100 pt-6">
                    <div className="flex items-baseline justify-between mb-6">
                      <span className="text-lg font-semibold text-earth-700">Subtotal</span>
                      <span className="text-2xl font-bold text-earth-900">${(total / 100).toFixed(2)}</span>
                    </div>

                    <div className="space-y-3 text-sm text-earth-600">
                      <div className="flex items-start gap-3">
                        <Truck className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                        <div>Shipping calculated at checkout</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                        <div>30-day money-back guarantee</div>
                      </div>
                    </div>

                    <Button variant="primary" className="w-full py-4 text-lg shadow-lg shadow-earth-600/30" onClick={closeCart}>
                      Proceed to Checkout
                    </Button>

                    <Button variant="outline" className="w-full py-3 mt-3 text-sm" onClick={closeCart}>
                      Continue Shopping
                    </Button>

                    <button
                      onClick={clearCart}
                      className="w-full py-3 text-sm text-earth-500 hover:text-earth-800 font-medium"
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

type CartItemProps = {
  item: { id: string; name: string; price: number; image: string; quantity: number; type: string; scentId?: string; tier?: string }
  onRemove: () => void
  onQuantityChange: (q: number) => void
}

function CartItem({ item, onRemove, onQuantityChange }: CartItemProps) {
  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-xl bg-earth-50 overflow-hidden flex-shrink-0 border border-bark-100">
          <img src={item.image || 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&q=80&auto=format&fit=crop'} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-earth-900 truncate">{item.name}</h3>
          <p className="text-xs text-earth-500 mb-2">{item.type === 'subscription' ? 'Monthly refill' : 'One-time purchase'}</p>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold text-earth-900">${(item.price / 100).toFixed(2)}</span>
            {item.tier && <span className="text-xs text-earth-400">{item.tier}</span>}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onQuantityChange(item.quantity - 1)}
              className="w-8 h-8 rounded border border-bark-200 flex items-center justify-center hover:bg-earth-50 transition-colors"
              aria-label="Decrease quantity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="w-8 text-center font-medium text-earth-900">{item.quantity}</span>
            <button
              onClick={() => onQuantityChange(item.quantity + 1)}
              className="w-8 h-8 rounded border border-bark-200 flex items-center justify-center hover:bg-earth-50 transition-colors"
              aria-label="Increase quantity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button
              onClick={onRemove}
              className="ml-2 text-xs text-earth-400 hover:text-earth-800 underline"
              aria-label="Remove item"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export function CartCountBadge() {
  const { itemCount } = useCart()
  if (itemCount === 0) return null
  return (
    <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center">
      {itemCount}
    </span>
  )
}

export function CartIconButton() {
  const { itemCount, toggleCart } = useCart()
  return (
    <button
      onClick={toggleCart}
      className="relative p-2 text-earth-500 hover:text-earth-600 transition-colors"
      aria-label="Shopping cart"
    >
      <ShoppingCart className="w-5 h-5" />
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  )
}
