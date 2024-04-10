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
import SectionFullPage from '@/app/layouts/SectionFullPage'
import ExploreTitle from '@/modules/About/ui/ExploreTitle/ExploreTitle'

const AboutContent = () => {
  return (
    <main>
      <SectionFullPage>
        <AboutHero />
      </SectionFullPage>
      <LottieLine />
      <AnimatedElement>
        <FoundedSection />
      </AnimatedElement>
      <LottieLine />
      <AnimatedElement>
        <SmallDescription />
      </AnimatedElement>
      <LottieLine />
      <AnimatedElement amount={'some'}>
        <OurServices />
      </AnimatedElement>
      <LottieLine />
      <AnimatedElement amount={'some'}>
        <OurTeam />
      </AnimatedElement>
      <LottieLine />
      <AnimatedElement>
        <ExploreTitle />
      </AnimatedElement>
      <AnimatedElement amount={'some'}>
        <ExploreMoreProjects />
      </AnimatedElement>
      <LottieLine />
      <AnimatedElement amount={'some'}>
        <AboutBigTitle />
      </AnimatedElement>
      <WeCreate />
      <CTA />
      <Footer />
    </main>
  )
}

export default AboutContent
