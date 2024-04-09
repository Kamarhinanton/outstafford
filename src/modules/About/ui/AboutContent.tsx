import React from 'react'
import AboutHero from '@/modules/About/ui/HeroAbout/AboutHero'
import Footer from '@/components/Footer/Footer'
import CTA from '@/components/CTA/CTA'
import ExploreMoreProjects from '@/modules/Case/ui/ExploreMoreProjects/ExploreMoreProjects'
import FoundedSection from '@/modules/About/ui/FoundedSection/FoundedSection'
import SmallDescription from '@/modules/About/ui/SmallDescription/SmallDescription'
import OurServices from '@/modules/About/ui/OurServices/OurServices'
import OurTeam from '@/modules/About/ui/OutTeam/OurTeam'
import LottieLine from '@/modules/About/ui/LottieLine/LottieLine'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import AboutBigTitle from '@/modules/About/ui/AboutBigTitle/AboutBigTitle'
import WeCreate from '@/modules/About/ui/WeCreate/WeCreate'

const AboutContent = () => {
  return (
    <main>
      <AboutHero />
      <LottieLine />
      <AnimatedElement>
        <FoundedSection />
      </AnimatedElement>
      <LottieLine />
      <AnimatedElement>
        <SmallDescription />
      </AnimatedElement>
      <LottieLine />
      <OurServices />
      <LottieLine />
      <OurTeam />
      <LottieLine />
      <ExploreMoreProjects />
      <LottieLine />
      <AboutBigTitle />
      <WeCreate />
      <CTA />
      <Footer />
    </main>
  )
}

export default AboutContent
