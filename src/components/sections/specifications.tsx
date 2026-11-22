export function Specifications() {
  const specs = [
    { label: 'Product type', value: 'Reusable scent-puzzle board' },
    { label: 'Materials', value: 'Weather-resistant bamboo composite' },
    { label: 'Compartments', value: 'Multiple movable sections' },
    { label: 'Mechanisms', value: 'Sliders, flip lids, and simple latches' },
    { label: 'Scent pouches', value: 'Non-edible enrichment accessories (not food)' },
    { label: 'Care', value: 'Wipe clean with a damp cloth' },
  ]

  return (
    <section className="section bg-earth-50">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Specifications</h2>
          <p className="text-earth-500 max-w-xl mx-auto">Configurable demo data — confirm final specs at purchase.</p>
        </div>
        <div className="divide-y divide-bark-100">
          {specs.map((s) => (
            <div key={s.label} className="py-5 flex justify-between">
              <span className="text-sm text-earth-500">{s.label}</span>
              <span className="text-sm font-medium text-earth-900">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
