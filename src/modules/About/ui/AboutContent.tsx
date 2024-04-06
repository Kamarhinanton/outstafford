import React from 'react'
import AboutHero from '@/modules/About/ui/HeroAbout/AboutHero'
import Footer from '@/components/Footer/Footer'
import CTA from '@/components/CTA/CTA'
import ExploreMoreProjects from '@/modules/Case/ui/ExploreMoreProjects/ExploreMoreProjects'
import FoundedSection from '@/modules/About/ui/FoundedSection/FoundedSection'
import SmallDescription from '@/modules/About/ui/SmallDescription/SmallDescription'

const AboutContent = () => {
  return (
    <main>
      <AboutHero />
      <FoundedSection />
      <SmallDescription />
      <ExploreMoreProjects />
      <CTA />
      <Footer />
    </main>
  )
}

export default AboutContent
