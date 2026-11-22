import { Link } from 'react-router-dom'

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-earth-50 text-earth-900">
      <div className="container max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-earth-600 leading-relaxed mb-6">
          This is a placeholder Privacy Policy page for SniffTrail. Replace with your actual privacy policy before launch.
        </p>
        <Link to="/" className="text-earth-600 hover:text-brand-600">← Back to home</Link>
      </div>
    </div>
  )
}
