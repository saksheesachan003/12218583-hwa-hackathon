import { motion } from 'framer-motion'
import { Brain, PawPrint, ShieldCheck, Clock } from 'lucide-react'

const BENEFITS = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'Mental enrichment',
    body: 'Scent-driven problem solving keeps your dog\u2019s mind active and sharp throughout the day.',
  },
  {
    icon: <PawPrint className="w-5 h-5" />,
    title: 'Reduces anxiety',
    body: 'Engaging play eases separation stress and prevents boredom-driven destructive behavior.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Lasting engagement',
    body: 'Changing scent locations prevent memorization — the puzzle stays interesting for weeks.',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Hours of independent play',
    body: 'Keeps dogs happily occupied while you\u2019re away or busy, no screens or treats required.',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center mb-6 backdrop-blur-sm border border-brand-500/30">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-earth-300 text-sm leading-relaxed">{benefit.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
