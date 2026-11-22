import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart, Truck, ShieldCheck, RefreshCw } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export function Cart() {
  const { items, total, itemCount, removeItem, updateQuantity, clearCart } = useCart()

  return (
    <div className="min-h-screen bg-earth-50 text-earth-900">
      <div className="container max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-10">
          <Link to="/" className="w-8 h-8 rounded-lg bg-white border border-bark-200 flex items-center justify-center hover:bg-earth-50 transition-colors">
            <ArrowLeft className="w-4 h-4 text-earth-600" />
          </Link>
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-brand-500" />
            <h1 className="text-2xl font-bold text-earth-900">Your Cart</h1>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-24 h-24 text-earth-200 mx-auto mb-8" />
            <h2 className="text-2xl font-bold text-earth-900 mb-2">Your cart is empty</h2>
            <p className="text-earth-500 mb-10 max-w-xs mx-auto">
              Add SniffTrail puzzle boards, scent-pouch refills, or expansion packs to get started.
            </p>
            <Button variant="primary" asChild className="w-auto">
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="p-0">
                    <div className="grid md:grid-cols-12 gap-4 p-6 items-center">
                      <div className="md:col-span-3">
                        <div className="w-full h-32 rounded-xl bg-earth-50 overflow-hidden border border-bark-100">
                          <img src={item.image || 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&q=80&auto=format&fit=crop'} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="md:col-span-5">
                        <h3 className="text-lg font-bold text-earth-900">{item.name}</h3>
                        <p className="text-sm text-earth-500 mb-4">{item.type === 'subscription' ? 'Scent-pouch refill subscription' : 'Puzzle board / expansion pack'}</p>
                        {item.scentId && (
                          <p className="text-xs text-earth-500 mb-4">Scent: {item.scentId.charAt(0).toUpperCase() + item.scentId.slice(1)} Trail</p>
                        )}
                      </div>
                      <div className="md:col-span-2 flex items-baseline gap-2 justify-end md:justify-start">
                        <span className="text-xl font-bold text-earth-900">${(item.price / 100).toFixed(2)}</span>
                        {item.tier && <span className="text-xs text-earth-400 ml-1">({item.tier})</span>}
                      </div>
                      <div className="md:col-span-2 flex items-center justify-end md:justify-center">
                        <div className="flex items-center gap-2 border border-bark-200 rounded-xl bg-white">
                          <button
                            onClick={() => updateQuantity(item.quantity - 1)}
                            className="w-9 h-9 rounded-l-xl border-r border-bark-200 flex items-center justify-center text-earth-600 hover:bg-earth-50"
                            aria-label="Decrease quantity"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-10 text-center font-medium text-earth-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.quantity + 1)}
                            className="w-9 h-9 rounded-r-xl flex items-center justify-center text-earth-600 hover:bg-earth-50"
                            aria-label="Increase quantity"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="md:col-span-2 flex items-center justify-end md:justify-center">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-earth-400 hover:text-earth-800 underline font-medium"
                          aria-label="Remove item"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Card className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-lg font-semibold text-earth-700">Subtotal ({itemCount} item{itemCount !== 1 ? 's' : ''})</span>
                    <span className="text-2xl font-bold text-earth-900">${(total / 100).toFixed(2)}</span>
                  </div>

                  <div className="space-y-3 text-sm text-earth-600 border-t border-bark-100 pt-6">
                    <div className="flex items-start gap-3">
                      <Truck className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                      <div>Shipping and taxes calculated at checkout</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                      <div>30-day money-back guarantee</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <RefreshCw className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                      <div>Subscription can be paused or cancelled anytime</div>
                    </div>
                  </div>

                  <Button variant="primary" className="w-full py-5 text-lg shadow-lg shadow-earth-600/30" onClick={() => {}}>
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="w-full py-4 mt-3 text-sm" asChild>
                    <Link to="/shop">Continue Shopping</Link>
                  </Button>

                  <button
                    onClick={clearCart}
                    className="w-full py-3 text-sm text-earth-500 hover:text-earth-800 font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
