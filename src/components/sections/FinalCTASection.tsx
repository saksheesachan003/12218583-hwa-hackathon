import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden" id="final-cta">
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[3rem] bg-gradient-to-b from-earth-600 to-earth-800 p-10 md:p-16 text-center shadow-2xl shadow-earth-600/40 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-400/20 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight relative z-10">
            Ready to Make Every Day an Adventure?
          </h2>
          <p className="text-earth-100/90 text-lg mb-8 max-w-xl mx-auto relative z-10">
            Give your dog something new to sniff, explore, and solve.
          </p>
          <Button asChild variant="ghost" className="w-auto text-white border-white/20 hover:bg-white/20 px-10 py-4 text-lg">
            <Link to="/shop">Shop SniffTrail</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
