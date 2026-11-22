import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScentRefillHero } from '@/components/scent-refill/ScentRefillHero'
import { ScentCollectionsSection } from '@/components/scent-refill/ScentCollectionsSection'
import { SubscriptionSelector } from '@/components/scent-refill/ScentRefillHero'
import { ScentProductInfo } from '@/components/scent-refill/ScentRefillHero'
import { COLLECTIONS } from '@/components/scent-refill/ScentRefillHero'
import React from 'react'

type CollectionType = (typeof COLLECTIONS)[number]

export function ScentRefillPage() {
  const [selectedCollection, setSelectedCollection] = React.useState<CollectionType | null>(null)

  return (
    <div className="min-h-screen bg-earth-50 text-earth-900">
      <Navbar />
      <ScentRefillHero />
      {selectedCollection && (
        <section className="section" id="refill-selected">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <ScentCollectionsSection onSelect={setSelectedCollection} />
              </div>
              <div className="lg:col-span-5 space-y-8">
                {selectedCollection && <SubscriptionSelector selectedCollection={selectedCollection} />}
              </div>
            </div>
          </div>
        </section>
      )}
      <ScentProductInfo />
      <Footer />
    </div>
  )
}
