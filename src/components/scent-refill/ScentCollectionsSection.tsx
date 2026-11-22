import { motion } from 'framer-motion'
import { COLLECTIONS, CollectionCard } from '@/components/scent-refill/ScentRefillHero'

type ScentCollectionsSectionProps = {
  onSelect: (collection: (typeof COLLECTIONS)[number]) => void
}

export function ScentCollectionsSection({ onSelect }: ScentCollectionsSectionProps) {
  return (
    <section className="section bg-white" id="collections">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Choose Your Scent Trail</h2>
          <p className="text-earth-500 max-w-2xl mx-auto text-lg">
            Three distinctive collections. Rotate between them so your dog never memorizes the same scent twice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {COLLECTIONS.map((collection, idx) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <CollectionCard collection={collection} onSelect={onSelect} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
