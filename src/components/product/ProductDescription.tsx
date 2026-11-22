export function ProductDescription() {
  return (
    <section className="section">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">A Puzzle That Stays Challenging</h2>
          <p className="text-earth-500 text-lg max-w-xl mx-auto leading-relaxed">
            Most dog puzzle toys work for a few days — then dogs learn the mechanism and lose interest. SniffTrail is different.
            The reusable board hides scented pouches in movable compartments, and you change the pouch location between sessions,
            so your dog can never memorize one fixed solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">How it keeps dogs engaged</h3>
            <p className="text-earth-600 leading-relaxed">
              SniffTrail works with your dog's strongest sense — smell. You place specially designed scented pouches (not edible
              treats) inside selected compartments before you leave. Your dog must sniff out which compartment holds the scent,
              then physically interact with sliders, flip lids, or simple latches to discover it.
            </p>
            <p className="text-earth-600 leading-relaxed">
              Because you move the pouches between sessions, the challenge stays fresh week after week instead of fading after a few days.
            </p>
          </div>

          <div className="rounded-3xl border border-bark-100 bg-earth-50 p-8">
            <h3 className="text-lg font-bold mb-4 text-earth-900">Why scent-based?</h3>
            <ul className="space-y-3 text-sm text-earth-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                Dogs rely on scent far more than sight
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                Sniffing is naturally calming and enriching
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                Changing locations prevent memorization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
