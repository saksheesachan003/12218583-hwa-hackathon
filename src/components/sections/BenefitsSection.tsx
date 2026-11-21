import { motion } from 'framer-motion'
import { Brain, PawPrint, RefreshCw, Puzzle, Zap, Leaf } from 'lucide-react'

const BENEFITS = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'Mental enrichment',
    body: 'Scent-driven play keeps your dog\u2019s mind active and curious.',
  },
  {
    icon: <PawPrint className="w-5 h-5" />,
    title: 'Encourages natural sniffing instincts',
    body: 'Lets dogs use their strongest sense in a rewarding, instinct-led activity.',
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: 'Reusable puzzle experience',
    body: 'One board, used again and again with new scent pouches every session.',
  },
  {
    icon: <Puzzle className="w-5 h-5" />,
    title: 'Changing challenges',
    body: 'Scent locations shift between sessions so dogs can\u2019t memorize one solution.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Interactive problem-solving',
    body: 'Sliders, flip lids, and latches turn sniffing into an active challenge.',
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: 'Multiple scent collections',
    body: 'Forest Trail, Herb Trail, and Other-Animal Trail keep things fresh.',
  },
]

export function BenefitsSection() {
  return (
    <section className="section bg-earth-900 text-white relative overflow-hidden" id="benefits">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1600&q=80&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Why SniffTrail</h2>
          <p className="text-earth-200 max-w-2xl mx-auto text-lg">
            Built for dogs who need more than a chew toy. Real enrichment, real results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-white/20 transition-all text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-brand-500/30">
                {benefit.icon}
              </div>
              <h3 className="text-sm font-bold mb-2 uppercase tracking-wider text-brand-100">
                {benefit.title}
              </h3>
              <p className="text-xs text-earth-300 leading-relaxed">{benefit.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
