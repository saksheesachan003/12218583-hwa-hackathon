export function HowToUse() {
  const steps = [
    { num: '01', title: 'Load the scent', body: 'Place a scented pouch inside one or more compartments.' },
    { num: '02', title: 'Mix it up', body: 'Change the pouch location between sessions.' },
    { num: '03', title: 'Follow the trail', body: 'Your dog uses its nose to find the right compartment.' },
    { num: '04', title: 'Unlock the mystery', body: 'Your dog slides, lifts, and unlatches to discover the scent.' },
  ]

  return (
    <section className="section bg-earth-50">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">How to Use SniffTrail</h2>
          <p className="text-earth-500 max-w-2xl mx-auto">Four simple steps to a happier, more engaged dog.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-earth-600 text-white flex items-center justify-center font-bold shrink-0">
                {s.num}
              </div>
              <div>
                <h3 className="text-lg font-bold text-earth-900">{s.title}</h3>
                <p className="text-sm text-earth-600">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
