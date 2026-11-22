import { X, Mail, Phone, MapPin, Link as ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Shop', href: '/shop' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Contact', href: '/contact' },
]

const SHOP_LINKS = [
  { label: 'Puzzle Board', href: '/shop' },
  { label: 'Scent Refill Packs', href: '/shop' },
  { label: 'Expansion Packs', href: '/shop' },
]

const SUPPORT_LINKS = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'Shipping and Returns', href: '/shipping' },
]

export function Footer() {
  return (
    <footer className="border-t border-bark-100 bg-earth-900 text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1600&q=80&auto=format&fit=crop')] opacity-5 bg-cover bg-center" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="pt-12 pb-8">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-xl bg-earth-600 flex items-center justify-center shadow-lg shadow-earth-600/30">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-display text-xl font-bold tracking-tight">SniffTrail</span>
              </div>
              <p className="text-earth-300 text-sm leading-relaxed max-w-xs">
                Turning every sniff into an adventure. Reusable scent-puzzle boards and monthly scent-pouch refills for mentally enriched dogs.
              </p>
              <div className="flex gap-4 mt-8">
                {[
                  { icon: <X className="w-5 h-5" />, href: '#', label: 'X' },
                  { icon: <ExternalLink className="w-5 h-5" />, href: '#', label: 'Website' },
                  { icon: <Mail className="w-5 h-5" />, href: '#', label: 'Email' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-10 h-10 rounded-xl bg-earth-800 flex items-center justify-center hover:bg-brand-500 transition-colors"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 lg:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-earth-300 hover:text-brand-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 lg:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Shop</h4>
              <ul className="space-y-3 text-sm">
                {SHOP_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-earth-300 hover:text-brand-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 lg:col-span-3">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Customer Support</h4>
              <ul className="space-y-3 text-sm">
                {SUPPORT_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-earth-300 hover:text-brand-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-2">
                <div className="flex items-start gap-3 text-sm text-earth-300">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>hello@snifftrail.com</div>
                </div>
                <div className="flex items-start gap-3 text-sm text-earth-300">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>+1 (555) 010-2030</div>
                </div>
                <div className="flex items-start gap-3 text-sm text-earth-300">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>Pawbusy Street, Petville</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-earth-400">
              <div className="flex items-center gap-2">
                <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
                <span>/</span>
                <a href="#" className="hover:text-brand-400 transition-colors">Terms and Conditions</a>
                <span>/</span>
                <a href="#" className="hover:text-brand-400 transition-colors">Shipping and Returns</a>
              </div>
              <div className="flex items-center gap-2">
                <span>© {new Date().getFullYear()} SniffTrail. All rights reserved.</span>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Join the Trail</h4>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                />
                <Button variant="ghost" size="sm" className="text-white border-white/20 hover:bg-white/20 px-6">
                  Subscribe
                </Button>
              </form>
              <p className="mt-3 text-[10px] text-earth-500">Get updates on new scent collections and enrichment tips.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
