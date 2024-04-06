import React from 'react'
import AboutHero from '@/modules/About/ui/HeroAbout/AboutHero'
import Footer from '@/components/Footer/Footer'
import CTA from '@/components/CTA/CTA'
import ExploreMoreProjects from '@/modules/Case/ui/ExploreMoreProjects/ExploreMoreProjects'

const AboutContent = () => {
  return (
    <main>
      <AboutHero />
      <ExploreMoreProjects />
      <CTA />
      <Footer />
    </main>
  )
}

export default AboutContent
