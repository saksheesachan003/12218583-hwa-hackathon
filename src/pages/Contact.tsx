export function Contact() {
  return (
    <section className="section">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-earth-500">Questions about your board, subscription, or scents? We’d love to help.</p>
        </div>
        <div className="bg-white rounded-2xl border border-bark-100 p-8 md:p-12 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-bark-200 focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-bark-200 focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition-all" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-earth-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-bark-200 focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition-all" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
