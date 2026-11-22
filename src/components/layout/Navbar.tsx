import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { CartIconButton } from '@/components/cart/CartDrawer'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/shop', label: 'Shop' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => location.pathname === href

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/85 backdrop-blur-md border-b border-bark-100 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <div className="w-9 h-9 rounded-xl bg-earth-600 flex items-center justify-center shadow-lg shadow-earth-600/30">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-earth-900">SniffTrail</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    isActive(link.href) ? 'text-earth-600' : 'text-earth-500 hover:text-earth-600'
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/shop">
                <Button variant="primary" className="px-6 py-2.5 text-sm shadow-lg shadow-earth-600/30">
                  Shop Now
                </Button>
              </Link>
              <CartIconButton />
            </div>

            <button
              className="md:hidden p-2 text-earth-600 hover:text-earth-800"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white border-b border-bark-100">
            <div className="container max-w-6xl mx-auto px-6 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-3 text-lg font-medium text-earth-600 hover:text-earth-600"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-bark-100">
                <Link to="/shop">
                  <Button variant="primary" className="w-full">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-20" />
    </>
  )
}
