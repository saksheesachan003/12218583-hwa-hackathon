import { motion } from 'framer-motion'
import React from 'react'
import { cn } from '@/lib/utils'

const THUMBNAILS = [
  { id: 'main', src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80&auto=format&fit=crop', alt: 'Front view of SniffTrail puzzle board' },
  { id: 'angle', src: 'https://images.unsplash.com/photo-1596620537861-1d4d5b92e04f?w=900&q=80&auto=format&fit=crop', alt: 'Angled view showing compartments' },
  { id: 'closeup', src: 'https://images.unsplash.com/photo-1602665693980-789a6f8a9c18?w=900&q=80&auto=format&fit=crop', alt: 'Close-up of slider mechanism' },
  { id: 'inuse', src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80&auto=format&fit=crop', alt: 'Dog interacting with the puzzle board' },
]

export function ProductGallery() {
  const [selected, setSelected] = React.useState<string>('main')
  const current = THUMBNAILS.find((t) => t.id === selected) || THUMBNAILS[0]

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 space-y-4">
        <div className="relative rounded-3xl overflow-hidden border border-bark-200 bg-white shadow-sm">
          <motion.img
            src={current.src}
            alt={current.alt}
            className="w-full h-auto block"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-2">
        {THUMBNAILS.map((thumb) => (
          <button
            key={thumb.id}
            onClick={() => setSelected(thumb.id)}
            className={cn(
              'rounded-2xl overflow-hidden border-2 transition-all',
              selected === thumb.id ? 'border-earth-600 shadow-lg shadow-earth-600/20' : 'border-transparent hover:border-bark-300',
            )}
          >
            <img src={thumb.src} alt={thumb.alt} className="w-full h-32 object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
