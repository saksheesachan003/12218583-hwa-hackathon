import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { ProductShowcaseSection } from '@/components/sections/ProductShowcaseSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { CTASection } from '@/components/sections/CTASection'

export function Home() {
  return (
    <div className="min-h-screen bg-earth-50 text-earth-900">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ProductShowcaseSection />
      <BenefitsSection />
      <CTASection />
    </div>
  )
}
