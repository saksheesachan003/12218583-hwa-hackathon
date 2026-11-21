import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { CartProvider } from '@/context/CartContext'
import { Home } from '@/pages/Home'
import { HowItWorks } from '@/pages/HowItWorks'
import { Shop } from '@/pages/Shop'
import { OurStory } from '@/pages/OurStory'
import { Contact } from '@/pages/Contact'

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
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}
