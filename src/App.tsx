import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartProvider } from '@/context/CartContext'
import { Home } from '@/pages/Home'
import { HowItWorks } from '@/pages/HowItWorks'
import { Shop } from '@/pages/Shop'
import { OurStory } from '@/pages/OurStory'
import { Contact } from '@/pages/Contact'
import { ProductPage } from '@/pages/Product'
import { ScentRefillPage } from '@/pages/ScentRefill'
import { PrivacyPolicy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'
import { Shipping } from '@/pages/Shipping'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-earth-50 text-earth-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/scent-refill" element={<ScentRefillPage />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/shipping" element={<Shipping />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}
