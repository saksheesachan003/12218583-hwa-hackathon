import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import React from 'react'

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
  {
    q: 'How often should I change the scent location?',
    a: 'We recommend changing the scent pouch location between sessions. Moving it around prevents your dog from memorizing one solution and keeps the challenge interesting for weeks.',
  },
  {
    q: 'Can I purchase additional scent packs?',
    a: 'Yes. SniffTrail offers monthly scent-pouch refill subscriptions (Forest Trail, Herb Trail, and Other-Animal Trail) plus one-time expansion packs to add new compartments to your board.',
  },
  {
    q: 'Is the puzzle reusable?',
    a: 'Yes. The SniffTrail board is designed to be reused indefinitely — just refill with new scented pouches and change their locations for a fresh challenge every time.',
  },
]

type FAQItem = (typeof FAQS)[number]

function FAQItem({ item, isOpen }: { item: FAQItem; isOpen: boolean }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="overflow-hidden"
    >
      <div className="pt-4 text-sm text-earth-600 leading-relaxed">{item.a}</div>
    </motion.div>
  )
}

function AccordionItem({ item, index, openIndex, onToggle }: { item: FAQItem; index: number; openIndex: number | null; onToggle: (index: number) => void }) {
  const isOpen = openIndex === index

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group rounded-2xl border border-bark-100 bg-white hover:border-brand-100 transition-all"
    >
      <button
        onClick={() => onToggle(index)}
        className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <ChevronDown className="w-4 h-4 text-earth-400 group-focus:text-brand-500 transition-colors" />
          <h3 className="text-base font-semibold text-earth-900">{item.q}</h3>
        </div>
        <ChevronUp className={cn('w-4 h-5 text-earth-400 transition-transform duration-300', isOpen && 'rotate-180 text-brand-500')} />
      </button>
      <AnimatePresence mode="wait">
        {isOpen && <FAQItem item={item} isOpen={isOpen} />}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <section className="section bg-white relative overflow-hidden" id="faq">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
          <p className="text-earth-500 max-w-xl mx-auto text-lg">
            Quick answers to the most common questions about SniffTrail.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, index) => (
            <AccordionItem
              key={item.q}
              item={item}
              index={index}
              openIndex={openIndex}
              onToggle={(i) => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
