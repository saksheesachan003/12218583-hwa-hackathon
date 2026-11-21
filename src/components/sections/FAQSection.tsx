import { motion } from 'framer-motion'
import { HelpCircle, Info } from 'lucide-react'

const FAQS = [
  {
    q: 'What is SniffTrail?',
    a: 'SniffTrail is a reusable scent-puzzle board for dogs. You place scented pouches in movable compartments, and your dog uses its nose, paws, and problem-solving to find them — keeping them mentally engaged.',
  },
  {
    q: 'Is the scent pouch edible?',
    a: 'No. Scented pouches are scent-based enrichment accessories, not food or treats. They are meant to be found and sniffed, never eaten by your dog.',
  },
  {
    q: 'How does the puzzle work?',
    a: 'You hide a scented pouch in a compartment, then your dog investigates the board, uses sliders and flip lids, and discovers the pouch. Change the pouch location between sessions so the challenge stays fresh.',
  },
]

export function FAQSection() {
  return (
    <section className="section bg-white relative overflow-hidden" id="faq">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
          <p className="text-earth-500 max-w-xl mx-auto text-lg">
            Quick answers to the most common questions about SniffTrail.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-bark-100 bg-white p-6 hover:border-brand-100 transition-all"
            >
              <div className="flex items-center justify-between cursor-pointer group" onClick={() => {}}>
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-earth-600 group-hover:text-brand-500 transition-colors" />
                  <h3 className="text-base font-semibold text-earth-900">{faq.q}</h3>
                </div>
                <Info className="w-5 h-5 text-earth-400" />
              </div>
              <p className="mt-4 text-sm text-earth-600 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
