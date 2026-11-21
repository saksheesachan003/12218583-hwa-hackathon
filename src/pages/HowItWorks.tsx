import { motion } from 'framer-motion'

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Load the scent',
      text: 'Place a scented pouch in any compartment. Pouches are scent-based, not edible — never let your dog eat them.',
    },
    {
      num: '02',
      title: 'Change the spot',
      text: 'Move pouches between sessions so your dog can\u2019t memorize one fixed solution.',
    },
    {
      num: '03',
      title: 'Let them sniff',
      text: 'Your dog uses their nose, investigates, and slides or lifts compartments to find the scent.',
    },
    {
      num: '04',
      title: 'Reward the find',
      text: 'Praise and play when they discover the pouch — mental exercise that tires them out happily.',
    },
  ]

  return (
    <section className="section relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How SniffTrail Works</h2>
          <p className="text-earth-500 max-w-2xl mx-auto">Simple to set up, endlessly engaging — because the challenge changes every time.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl border border-bark-100 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 rounded-full bg-earth-600 text-white flex items-center justify-center font-bold">{step.num}</span>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-earth-500 leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
