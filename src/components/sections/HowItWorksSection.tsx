import { motion } from 'framer-motion'
import { Droplets, RefreshCw, Search, PackageOpen } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: <Droplets className="w-5 h-5" />,
    title: 'Load the Scent',
    body: 'Place a scented pouch inside one or more compartments of the board before you head out.',
  },
  {
    num: '02',
    icon: <RefreshCw className="w-5 h-5" />,
    title: 'Mix It Up',
    body: 'Change the location of the scent pouches between sessions so the challenge stays fresh.',
  },
  {
    num: '03',
    icon: <Search className="w-5 h-5" />,
    title: 'Follow the Trail',
    body: 'Your dog uses its nose to sniff out which compartment holds the scent.',
  },
  {
    num: '04',
    icon: <PackageOpen className="w-5 h-5" />,
    title: 'Unlock the Mystery',
    body: 'Your dog slides, lifts, and unlatches the movable mechanisms to discover the scent pouch.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="section bg-earth-50 relative overflow-hidden" id="how-it-works">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-4">
            How it works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Four simple steps to a happier dog</h2>
          <p className="text-earth-500 max-w-2xl mx-auto text-lg">
            Set it up once, then change the trail every time. No memorization, just lasting engagement.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[2px] h-full bg-bark-200 hidden lg:block" />
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="text-center"
              >
                <div className="mx-auto mb-6">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-earth-600 flex items-center justify-center shadow-lg shadow-earth-600/20 relative z-10">
                    {step.icon}
                  </div>
                  <span className="mt-3 inline-block w-10 h-10 rounded-full bg-earth-600 text-white text-xs font-bold flex items-center justify-center leading-none shadow-lg shadow-earth-600/30">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-earth-600 text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
