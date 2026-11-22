export function WhatsIncluded() {
  const items = [
    'Reusable SniffTrail puzzle board',
    'Set of movable compartments and mechanisms',
    'Introductory scent-pouch pack (3 pouches)',
    'Getting-started guide',
  ]

  return (
    <section className="section bg-white">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">What's Included</h2>
          <p className="text-earth-500 max-w-xl mx-auto">Everything you need to start the first scent trail.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border border-bark-100 bg-white hover:bg-brand-50 transition-colors">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-sm text-earth-700">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-earth-400 text-center uppercase tracking-widest">
          Component details are configurable demo data. Refer to your product packaging for confirmed specifications.
        </p>
      </div>
    </section>
  )
}
