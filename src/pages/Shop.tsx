import { useState } from 'react'
import { motion } from 'framer-motion'
import { BOARD, EXPANSION_PACKS, SCENT_COLLECTIONS } from '@/data/products'
import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ShoppingBag, Leaf, RotateCw } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export function Shop() {
  const [activeTab, setActiveTab] = useState<'board' | 'subscription' | 'expansion'>('board')
  const { addItem } = useCart()

  const tabs = [
    { id: 'board' as const, label: 'Puzzle Board', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'subscription' as const, label: 'Scent Refills', icon: <Leaf className="w-5 h-5" /> },
    { id: 'expansion' as const, label: 'Expansion Packs', icon: <RotateCw className="w-5 h-5" /> },
  ]

  return (
    <section className="section relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything Your Nose Needs</h2>
          <p className="text-earth-500 max-w-2xl mx-auto">One board, endless scents, optional upgrades. Choose your trail.</p>
        </div>

        <div className="flex justify-center mb-12 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'px-6 py-2.5 rounded-full text-sm font-medium transition-all border',
                activeTab === tab.id
                  ? 'bg-earth-600 text-white border-earth-600 shadow-lg shadow-earth-600/30'
                  : 'bg-white text-earth-500 border-bark-200 hover:text-earth-600 hover:border-earth-300'
              )}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'board' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative"
            >
              <Card className="group-hover:border-brand-500/50">
                <CardImage src={BOARD.image} alt={BOARD.name} />
                <CardContent className="pt-6">
                  <Badge variant="scent">One-time purchase</Badge>
                  <h3 className="text-xl font-bold mt-4 mb-2">{BOARD.name}</h3>
                  <p className="text-earth-500 text-sm mb-6 line-clamp-3">{BOARD.description}</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-2xl font-bold text-earth-900">${(BOARD.price / 100).toFixed(2)}</span>
                  </div>
                  <ul className="space-y-2 mb-8 text-sm text-earth-600">
                    {BOARD.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="w-full" onClick={() => addItem({ ...BOARD, type: 'board', quantity: 1 })}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}

        {activeTab === 'subscription' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {SCENT_COLLECTIONS.map((scent) => (
              <motion.div
                key={scent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: SCENT_COLLECTIONS.indexOf(scent) * 0.1 }}
                className="group relative"
              >
                <Card className="group-hover:border-brand-500/50">
                  <CardImage src={scent.image} alt={scent.name} />
                  <CardContent className="pt-6">
                    <Badge variant="subscription">Monthly refill</Badge>
                    <h3 className="text-xl font-bold mt-4 mb-2">{scent.name}</h3>
                    <p className="text-earth-500 text-sm mb-6 line-clamp-3">{scent.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {scent.notes.map((note) => (
                        <span key={note} className="px-2.5 py-1 bg-white border border-bark-100 rounded-full text-xs text-earth-600">
                          {note}
                        </span>
                      ))}
                    </div>
                    <Button variant="primary" className="w-full" onClick={() => addItem({ ...scent, type: 'subscription', scentId: scent.id, quantity: 1 })}>
                      Subscribe ${(scent.price / 100).toFixed(2)}/mo
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'expansion' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {EXPANSION_PACKS.map((pack) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: EXPANSION_PACKS.indexOf(pack) * 0.1 }}
                className="group relative"
              >
                <Card className="group-hover:border-brand-500/50">
                  <CardImage src={pack.image} alt={pack.name} />
                  <CardContent className="pt-6">
                    <Badge>Expansion</Badge>
                    <h3 className="text-xl font-bold mt-4 mb-2">{pack.name}</h3>
                    <p className="text-earth-500 text-sm mb-6 line-clamp-3">{pack.description}</p>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-2xl font-bold text-earth-900">${(pack.price / 100).toFixed(2)}</span>
                    </div>
                    <ul className="space-y-2 mb-8 text-sm text-earth-600">
                      {pack.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" onClick={() => addItem({ ...pack, type: 'expansion', quantity: 1 })}>
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
