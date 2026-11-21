import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="section relative overflow-hidden" id="cta">
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-earth-600 p-10 md:p-16 text-center shadow-2xl shadow-earth-600/40 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-400/20 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
            Ready to start the adventure?
          </h2>
          <p className="text-earth-100/90 text-lg mb-8 max-w-xl mx-auto relative z-10">
            Give your dog the mental enrichment they deserve — one sniff at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button asChild variant="ghost" className="w-auto text-white border-white/20 hover:bg-white/20">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" className="w-auto text-white border-white/20 hover:bg-white/20">
              <Link to="/how-it-works">Learn more</Link>
            </Button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-earth-200/80 text-sm relative z-10">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@snifftrail.com</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 010-2030</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
