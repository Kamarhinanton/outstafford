import React from 'react'
import AboutHero from '@/modules/About/ui/HeroAbout/AboutHero'
import Footer from '@/components/Footer/Footer'
import FoundedSection from '@/modules/About/ui/FoundedSection/FoundedSection'
import SmallDescription from '@/modules/About/ui/SmallDescription/SmallDescription'
import OurServices from '@/modules/About/ui/OurServices/OurServices'
import OurTeam from '@/modules/About/ui/OutTeam/OurTeam'
import LottieLine from '@/modules/About/ui/LottieLine/LottieLine'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import AboutBigTitle from '@/modules/About/ui/AboutBigTitle/AboutBigTitle'
import SectionFullPage from '@/app/layouts/SectionFullPage'
import ExploreTitle from '@/modules/About/ui/ExploreTitle/ExploreTitle'
import dynamic from 'next/dynamic'

const MoreProjects = dynamic(
  () => import('@/modules/Case/ui/ExploreMoreProjects/ExploreMoreProjects'),
)

const Create = dynamic(() => import('@/modules/About/ui/WeCreate/WeCreate'))

const CTADynamic = dynamic(() => import('@/components/CTA/CTA'))

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
        <MoreProjects />
      </AnimatedElement>
      <LottieLine />
      <AnimatedElement amount={'some'}>
        <AboutBigTitle />
      </AnimatedElement>
      <Create />
      <CTADynamic />
      <Footer />
    </main>
  )
}

export default AboutContent
