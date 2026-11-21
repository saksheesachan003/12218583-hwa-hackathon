import { motion } from 'framer-motion'
import { Star, PawPrint } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Maya R.',
    dog: 'Luna (Border Collie)',
    stars: 5,
    text: 'Luna used to ignore every puzzle after two days. With SniffTrail she\u2019s still hunting for the scent weeks later.',
    location: 'Portland, OR',
  },
  {
    name: 'Dev P.',
    dog: 'Bear (Labrador)',
    stars: 5,
    text: 'The changing scent locations are genius. Bear doesn\u2019t memorize it — he works for it every time.',
    location: 'Austin, TX',
  },
  {
    name: 'Leila K.',
    dog: 'Milo (Beagle)',
    stars: 4,
    text: 'Milo loves the sliders and flip lids. Keeps him busy while I\u2019m on calls all morning.',
    location: 'Brooklyn, NY',
  },
]

export function TestimonialsSection() {
  return (
    <section className="section bg-earth-50 relative overflow-hidden" id="testimonials">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">What Sniffers Are Saying</h2>
          <p className="text-earth-500 text-sm max-w-xs mx-auto uppercase tracking-widest font-semibold">
            Demo content — placeholder reviews
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-8 px-4 py-12 overflow-x-auto scroll-snap-x scrollbar-none">
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: TESTIMONIALS.indexOf(t) * 0.1 }}
                className="snap-start min-w-[340px] lg:min-w-[420px]"
              >
                <div className="rounded-3xl border border-bark-200 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-1 text-brand-500 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" fill={i <= t.stars ? 'currentColor' : 'none'} stroke={i <= t.stars ? 'none' : 'currentColor'} />
                    ))}
                  </div>
                  <p className="text-earth-600 leading-relaxed mb-6 italic">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center">
                      <PawPrint className="w-5 h-5 text-earth-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-earth-900">{t.name}</div>
                      <div className="text-xs text-earth-500">{t.dog} &bull; {t.location}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-earth-400 uppercase tracking-widest">
          These are illustrative demo testimonials, not verified customer reviews.
        </div>
      </div>
    </section>
  )
}
