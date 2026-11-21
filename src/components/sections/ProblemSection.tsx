import { motion } from 'framer-motion'
import { PawPrint, Clock, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const PROBLEM_CARDS = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Solved too quickly',
    body: 'Dogs learn repetitive puzzle mechanisms in days, then lose interest once the trick is memorized.',
  },
  {
    icon: <PawPrint className="w-5 h-5" />,
    title: 'Boredom sets in',
    body: 'Static puzzles offer no variety, so dogs stop engaging and fall back into bored or anxious behaviors.',
  },
  {
    icon: <AlertCircle className="w-5 h-5" />,
    title: 'Engagement fades',
    body: 'Familiar toys fail to provide new challenges, so mental enrichment drops off within a week.',
  },
]

export function ProblemSection() {
  return (
    <section className="section relative overflow-hidden bg-white" id="problem">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Same Old Toys. Same Old Tricks.</h2>
          <p className="text-earth-500 max-w-2xl mx-auto text-lg">
            Traditional dog puzzle toys work for a few days — then dogs learn the mechanism, memorize the solution,
            and stop engaging. Mental enrichment disappears just when it's needed most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROBLEM_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                'rounded-3xl border border-bark-100 bg-earth-50 p-8 hover:border-brand-200 hover:bg-brand-50 transition-all',
              )}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm border border-bark-200">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-earth-600 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
