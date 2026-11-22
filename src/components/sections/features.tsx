import { cn } from '@/lib/utils'

export function FeaturesGrid() {
  const features = [
    { title: 'Multiple movable compartments', body: 'Sliders, flip lids, and latches keep paws and noses actively engaged.' },
    { title: 'Scent-pouch placement', body: 'Hide non-edible scented pouches in any compartment before you leave.' },
    { title: 'Randomized scent locations', body: 'Move pouches between sessions so dogs can\u2019t memorize one solution.' },
    { title: 'Reusable design', body: 'One board used again and again with fresh scent pouches every session.' },
    { title: 'Expandable experience', body: 'Add expansion packs for new compartments and advanced challenges.' },
    { title: 'Weather-resistant bamboo', body: 'Built for daily use and easy to wipe clean.' },
  ]

  return (
    <section className="section bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Key Features</h2>
          <p className="text-earth-500 max-w-2xl mx-auto">Everything a curious nose needs to stay engaged.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className={cn('rounded-3xl border border-bark-100 bg-white p-8 hover:shadow-lg transition-all')}>
              <h3 className="text-lg font-bold mb-3 text-earth-900">{f.title}</h3>
              <p className="text-sm text-earth-600 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
