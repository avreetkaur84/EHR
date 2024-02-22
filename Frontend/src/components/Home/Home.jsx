import React from 'react'
import HeroSection from './HeroSection'
import FeaturesAndBenefitsSection from './FeaturesAndBenefitsSection'
import HowItWorksSection from './HowItWorksSection'
import TestimonialsSection from './TestimonialsSection'

function Home() {
  return (
    <div>
        <HeroSection/>
        <FeaturesAndBenefitsSection/>
        <HowItWorksSection/>
        <TestimonialsSection/>
    </div>
  )
}

export default Home