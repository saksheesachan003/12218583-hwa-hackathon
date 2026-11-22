import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProductGallery } from '@/components/product/ProductGallery'
import { ProductInfo } from '@/components/product/ProductInfo'
import { ProductDescription } from '@/components/product/ProductDescription'
import { ProductDetails } from '@/components/product/ProductDetails'

export function ProductPage() {
  return (
    <div className="min-h-screen bg-earth-50 text-earth-900">
      <Navbar />
      <section className="section relative">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-10">
              <ProductGallery />
              <ProductDescription />
            </div>
            <div className="lg:col-span-5 space-y-8">
              <ProductInfo />
            </div>
          </div>
        </div>
      </section>
      <ProductDetails />
      <Footer />
    </div>
  )
}
