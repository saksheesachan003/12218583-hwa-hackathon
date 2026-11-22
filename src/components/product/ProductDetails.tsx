import { FeaturesGrid } from '@/components/sections/features'
import { HowToUse } from '@/components/sections/how-to-use'
import { WhatsIncluded } from '@/components/sections/whats-included'
import { Specifications } from '@/components/sections/specifications'
import { RelatedProducts } from '@/components/sections/related-products'
import { ProductFAQ } from '@/components/sections/product-faq'

export function ProductDetails() {
  return (
    <div className="relative">
      <FeaturesGrid />
      <HowToUse />
      <WhatsIncluded />
      <Specifications />
      <RelatedProducts />
      <ProductFAQ />
    </div>
  )
}
