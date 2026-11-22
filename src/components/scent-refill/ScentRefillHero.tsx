import { motion } from 'framer-motion'
import React from 'react'
import { TreePine, Leaf, PawPrint, RotateCw, Clock, Check } from 'lucide-react'
import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export const COLLECTIONS = [
  {
    id: 'forest',
    name: 'Forest Trail',
    tagline: 'A nature-inspired scent collection',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80&auto=format&fit=crop',
    icon: <TreePine className="w-5 h-5" />,
    description:
      'Earthy pine, damp moss, and cedarwood — a walk through the woods in every pouch. Perfect for dogs who love the great outdoors.',
    price: 18,
    notes: ['Pine', 'Moss', 'Cedarwood'],
  },
  {
    id: 'herb',
    name: 'Herb Trail',
    tagline: 'A botanical-inspired scent collection',
    image: 'https://images.unsplash.com/photo-1591706810935-466319864f0e?w=600&q=80&auto=format&fit=crop',
    icon: <Leaf className="w-5 h-5" />,
    description:
      'Fresh lavender, rosemary, and mint — a garden breeze your dog will love to track. Gentle, calming, and refreshing.',
    price: 18,
    notes: ['Lavender', 'Rosemary', 'Mint'],
  },
  {
    id: 'animal',
    name: 'Other-Animal Trail',
    tagline: 'An animal-inspired scent collection designed around scent exploration',
    image: 'https://images.unsplash.com/photo-1552053832-13006d9d150b?w=600&q=80&auto=format&fit=crop',
    icon: <PawPrint className="w-5 h-5" />,
    description:
      'Subtle wildlife scents that awaken your dog\u2019s natural tracking instincts. A scent adventure that keeps noses busy.',
    price: 18,
    notes: ['Deer', 'Rabbit', 'Squirrel'],
  },
]

export function ScentRefillHero() {
  return (
    <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden" id="refill-hero">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold">
              Scent-Pouch Refills
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-earth-900 leading-tight">
              New Scents. New Trails. New Adventures.
            </h1>
            <p className="text-earth-500 text-lg leading-relaxed max-w-lg">
              Dogs memorize fixed solutions fast. Rotating scent collections keeps every puzzle session fresh — new trails to
              follow, new scents to track, and new reasons to stay engaged week after week.
            </p>
            <ul className="space-y-4 text-sm text-earth-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                <span>Scented pouches are enrichment accessories — not edible treats</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                <span>Change collections to prevent memorization</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                <span>One-time refills or monthly subscription</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="w-full sm:w-auto">
                Shop Refill Packs
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                View Collections
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-earth-600/20 border border-bark-100 bg-white"
            >
              <img
                src="https://images.unsplash.com/photo-1591706810935-466319864f0e?w=900&q=80&auto=format&fit=crop"
                alt="Scent-pouch refill packs"
                className="w-full h-auto block"
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-bark-100">
                <Leaf className="w-4 h-4 text-brand-500" />
                <span className="text-sm font-medium text-earth-700">Scent-only enrichment</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

type CollectionCardProps = {
  collection: (typeof COLLECTIONS)[number]
  onSelect: (collection: (typeof COLLECTIONS)[number]) => void
}

export function CollectionCard({ collection, onSelect }: CollectionCardProps) {
  return (
    <Card className="group relative h-full hover:border-brand-500/50 transition-all">
      <CardImage src={collection.image} alt={collection.name} />
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600">
            Refill Pack
          </span>
          <span className="text-xs font-bold text-earth-900">${collection.price}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
        <p className="text-earth-600 text-sm mb-6 line-clamp-3">{collection.description}</p>
        <div className="space-y-2 mb-6">
          {collection.notes.map((note) => (
            <div key={note} className="flex items-center gap-2 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
              <span className="text-earth-600">{note}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="w-full py-3 text-sm" onClick={() => onSelect(collection)}>
            Buy Once
          </Button>
          <Button variant="ghost" className="w-full py-3 text-sm" onClick={() => onSelect(collection)}>
            Subscribe
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

type SubscriptionOption = { label: string; value: string; price: number; frequency: string; saving?: string }

const SUBSCRIPTION_OPTIONS: SubscriptionOption[] = [
  { label: 'One-time refill', value: 'onetime', price: 18, frequency: 'Per pack', saving: '' },
  { label: 'Monthly subscription', value: 'monthly', price: 15, frequency: 'Every 30 days', saving: 'Save 17%' },
  { label: 'Every 3 months', value: 'quarterly', price: 48, frequency: 'Every 90 days', saving: 'Save 11%' },
  { label: 'Every 6 months', value: 'biannual', price: 90, frequency: 'Every 180 days', saving: 'Save 16%' },
]

export function SubscriptionSelector({ selectedCollection }: { selectedCollection: (typeof COLLECTIONS)[number] }) {
  const [selected, setSelected] = React.useState<SubscriptionOption>(SUBSCRIPTION_OPTIONS[1])
  const { addItem } = useCart()

  const addSelected = () => {
    addItem({
      id: `${selectedCollection.id}-${selected.value}`,
      name: `${selectedCollection.name} Refill (${selected.label})`,
      price: selected.price * 100,
      image: selectedCollection.image,
      type: 'subscription',
      scentId: selectedCollection.id,
      quantity: 1,
    })
  }

  return (
    <Card className="p-8 md:p-12">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-earth-900">Choose your refill option</h3>
            <p className="text-earth-500 text-sm">Pricing is configurable demo data — update before launch.</p>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-earth-100 text-earth-700 text-xs font-semibold">
            <RotateCw className="w-3 h-3" />
            Refreshes each delivery
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {SUBSCRIPTION_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSelected(opt)}
              className={cn(
                'border rounded-2xl p-4 text-left transition-all',
                selected.value === opt.value
                  ? 'border-earth-600 bg-earth-50 shadow-md shadow-earth-600/10'
                  : 'border-bark-200 hover:border-earth-300 hover:bg-earth-50',
              )}
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-xl font-bold text-earth-900">${opt.price}</span>
                <span className="text-xs text-earth-500">{opt.frequency}</span>
              </div>
              <p className="text-xs text-earth-600 leading-relaxed">{opt.label}</p>
              {opt.saving && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold text-brand-700 bg-brand-50">
                  {opt.saving}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="pt-4 border-t border-bark-100 flex items-center justify-between text-sm">
          <span className="text-earth-600">Selected: {selectedCollection.name}</span>
          <span className="text-lg font-bold text-earth-900">${selected.price} {selected.frequency}</span>
        </div>

        <Button
          variant="primary"
          className="w-full py-4 text-lg shadow-lg shadow-earth-600/30"
          onClick={addSelected}
        >
          {selected.label === 'One-time refill' ? 'Add to Cart' : 'Start Subscription'}
        </Button>
      </div>
    </Card>
  )
}

export function ScentProductInfo() {
  return (
    <section className="section bg-earth-50" id="refill-info">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">What Are Scent Pouches?</h2>
          <p className="text-earth-500 text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about SniffTrail\u2019s scent-based enrichment accessories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Scent-based, not food</h3>
            <p className="text-earth-600 leading-relaxed">
              SniffTrail scent pouches are scent-based enrichment accessories, not edible treats. They are designed to be found
              and sniffed — never eaten by your dog. Each pouch holds a long-lasting scent that invites your dog to track,
              investigate, and solve.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">How they are used</h3>
            <p className="text-earth-600 leading-relaxed">
              Place a scented pouch inside one or more compartments of the SniffTrail puzzle board before you head out. Your dog
              uses its nose to sniff out which compartment holds the scent, then slides, lifts, or unlatches the movable
              mechanisms to discover the pouch.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">How they fit the puzzle board</h3>
            <p className="text-earth-600 leading-relaxed">
              Each pouch is sized to sit securely inside the board\u2019s movable compartments. Pouches slide into dedicated scent
              slots and stay in place while your dog investigates the board.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">How to replace them</h3>
            <p className="text-earth-600 leading-relaxed">
              Remove the used pouch from its compartment and insert a fresh one. Change the pouch location between sessions so
              your dog can\u2019t memorize one fixed solution. Dispose of used pouches responsibly — do not let your dog chew or
              swallow them.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Storage and care</h3>
            <p className="text-earth-600 leading-relaxed">
              Store scent pouches in a cool, dry place away from direct sunlight and strong odors. Keep the pouch pouch sealed
              until ready to use. Replace pouches when the scent fades. Keep out of reach of children and other pets when not in
              use.
            </p>
          </div>

          <div className="rounded-3xl border border-bark-100 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-earth-900">Product safety</h4>
                <p className="text-sm text-earth-600 mt-1">
                  Scent pouches are not food and are not intended for consumption. Supervise your dog during play. If a pouch is
                  damaged or swallowed, discontinue use and contact your veterinarian. Scent exposure is not guaranteed to be
                  risk-free for every dog — discontinue use if your dog shows signs of irritation or distress.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                <span className="text-sm text-earth-600">Enrichment accessory — not edible</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                <span className="text-sm text-earth-600">Supervise play at all times</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                <span className="text-sm text-earth-600">Store in a cool, dry place</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-b from-earth-600 to-earth-800 p-10 md:p-16 text-center shadow-2xl shadow-earth-600/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-400/20 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight relative z-10">
            Choose Their Next Scent Adventure
          </h2>
          <p className="text-earth-100/90 text-lg mb-8 max-w-xl mx-auto relative z-10">
            Rotate collections to keep every sniff fresh and every trail exciting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button variant="ghost" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/20 px-10 py-4 text-lg">
              Shop Refill Packs
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/20 px-10 py-4 text-lg">
              Subscribe to Refills
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
