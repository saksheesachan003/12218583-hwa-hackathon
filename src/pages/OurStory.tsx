import { motion } from 'framer-motion'

export function OurStory() {
  return (
    <section className="section">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Story</h2>
          <p className="text-earth-500 max-w-2xl mx-auto">Born from a simple question: what keeps dogs happy when we're not home?</p>
        </div>
        <div className="space-y-12 text-earth-600 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl border border-bark-100 p-8"
          >
            <p>The problem is real. Dogs left alone get bored, anxious, and destructive. Most puzzle toys work for a few days — then dogs memorize the solution and lose interest.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl border border-bark-100 p-8"
          >
            <p>SniffTrail changes the challenge every session. Movable compartments, sliders, flip lids, and latches — combined with scent pouches you hide in new spots each time — keep dogs engaged for weeks.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl border border-bark-100 p-8"
          >
            <p>Scented pouches are enrichment accessories, not food. They\u2019re meant to be found, not eaten.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
