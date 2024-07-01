import React from 'react'
import AboutHero from '@/modules/About/ui/HeroAbout/AboutHero'
import Footer from '@/components/Footer/Footer'
import FoundedSection from '@/modules/About/ui/FoundedSection/FoundedSection'
import SmallDescription from '@/modules/About/ui/SmallDescription/SmallDescription'
import OurServices from '@/modules/About/ui/OurServices/OurServices'
import OurTeam from '@/modules/About/ui/OutTeam/OurTeam'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import AboutBigTitle from '@/modules/About/ui/AboutBigTitle/AboutBigTitle'
import SectionFullPage from '@/app/layouts/SectionFullPage'
import ExploreMoreProjects from '@/modules/Case/ui/ExploreMoreProjects/ExploreMoreProjects'
import WeCreate from '@/modules/About/ui/WeCreate/WeCreate'
import dynamic from 'next/dynamic'
import { CardBlogType } from '@/utils/globalTypes'

const Line = dynamic(() => import('@/modules/About/ui/LottieLine/LottieLine'), {
  ssr: false,
})

const CTADynamic = dynamic(() => import('@/components/CTA/CTA'))

const AboutContent = ({ projects }: { projects: CardBlogType[] }) => {
  return (
    <main>
      <SectionFullPage>
        <AboutHero />
      </SectionFullPage>
      <Line />
      <AnimatedElement>
        <FoundedSection />
      </AnimatedElement>
      <Line />
      <SmallDescription />
      <Line />
      <AnimatedElement amount={'some'}>
        <OurServices />
      </AnimatedElement>
      <Line />
      <AnimatedElement amount={'some'}>
        <OurTeam />
      </AnimatedElement>
      <Line />
      <AnimatedElement amount={'some'}>
        <ExploreMoreProjects projects={projects} />
      </AnimatedElement>
      <Line />
      <AnimatedElement amount={'some'}>
        <AboutBigTitle />
      </AnimatedElement>
      <WeCreate />
      <CTADynamic />
      <Footer />
    </main>
  )
}

export default AboutContent
