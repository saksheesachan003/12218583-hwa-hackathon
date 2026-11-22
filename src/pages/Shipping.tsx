import { Link } from 'react-router-dom'

export function Shipping() {
  return (
    <div className="min-h-screen bg-earth-50 text-earth-900">
      <div className="container max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Shipping and Returns</h1>
        <p className="text-earth-600 leading-relaxed mb-6">
          This is a placeholder Shipping and Returns page for SniffTrail. Replace with your actual policy before launch.
        </p>
        <Link to="/" className="text-earth-600 hover:text-brand-600">← Back to home</Link>
      </div>
    </div>
  )
}
