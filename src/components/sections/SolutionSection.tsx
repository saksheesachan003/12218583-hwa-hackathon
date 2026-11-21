import { motion } from 'framer-motion'
import { TreePine, RotateCw, ShieldCheck, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'

const SOLUTION_FEATURES = [
  {
    icon: <TreePine className="w-5 h-5" />,
    title: 'Scent discovery',
    body: 'Dogs use their powerful sense of smell to hunt for hidden scented pouches — natural, instinct-driven play.',
  },
  {
    icon: <RotateCw className="w-5 h-5" />,
    title: 'Movable compartments',
    body: 'Sliders, flip lids, and latches keep paws and noses actively engaged, not just passive observers.',
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: 'Changing scent locations',
    body: 'Pouches move between sessions, so dogs can never memorize one fixed solution — the challenge stays fresh.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Reusable system',
    body: 'One board, endless configurations. Refill with new scent pouches whenever you want a new trail.',
  },
]

export function SolutionSection() {
  return (
    <section className="section relative overflow-hidden" id="solution">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold">
              The Solution
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Meet a Whole New Kind of Play
            </h2>
            <p className="text-earth-500 text-lg leading-relaxed max-w-lg">
              SniffTrail is a scent-based enrichment system, not just another toy. Every sniff is a new challenge,
              every session is a new adventure — keeping your dog curious, engaged, and happily tired.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="primary" className="w-auto">
                <Link to="/shop">Shop SniffTrail</Link>
              </Button>
              <Button asChild variant="outline" className="w-auto">
                <Link to="/how-it-works">See how it works</Link>
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
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80&auto=format&fit=crop"
                alt="SniffTrail puzzle board"
                className="w-full h-auto block"
              />
              <div className="absolute -inset-px bg-gradient-to-r from-brand-500 to-earth-600 rounded-3xl blur opacity-20 animate-paw-pulse" />
            </motion.div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTION_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-bark-100 bg-white p-6 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-earth-600 leading-relaxed">{feature.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
