import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PawPrint } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const DECOR = [
  { id: 1, top: '10%', left: '8%', size: 240, delay: 0 },
  { id: 2, top: '20%', right: '6%', size: 160, delay: 1 },
  { id: 3, bottom: '15%', left: '4%', size: 200, delay: 2 },
  { id: 4, bottom: '25%', right: '10%', size: 140, delay: 3 },
]

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Decorative scent-trail elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {DECOR.map((d) => (
            <motion.div
              key={d.id}
              className="absolute rounded-full bg-brand-100/60 blur-3xl animate-paw-pulse"
              style={{
                top: d.top,
                left: d.left,
                right: d.right,
                bottom: d.bottom,
                width: d.size,
                height: d.size,
                animationDelay: `${d.delay}s`,
                opacity: 0,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: d.delay * 0.5 }}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-earth-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Let Their Nose Lead the Adventure
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-earth-500 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Meet SniffTrail — the scent-powered puzzle system that keeps your
              dog curious, challenged, and happily engaged while you’re away.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild variant="primary" className="w-full sm:w-auto">
                <Link to="/shop">Explore SniffTrail</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to="/how-it-works">How it works</Link>
              </Button>
            </motion.div>
          </div>

          <div className="relative flex justify-center">
            <motion.div
              className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-earth-600/20 border border-bark-100 bg-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white to-earth-50" />
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80&auto=format&fit=crop"
                alt="Happy dog interacting with SniffTrail puzzle board"
                className="w-full h-auto block"
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-bark-100">
                <PawPrint className="w-4 h-4 text-brand-500" />
                <span className="text-sm font-medium text-earth-700">Scent-powered enrichment</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
