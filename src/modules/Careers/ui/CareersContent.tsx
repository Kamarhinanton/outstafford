import React from 'react'
import Footer from '@/components/Footer/Footer'
import HeroCareers from '@/modules/Careers/ui/HeroCareers/HeroCareers'
import Positions from '@/modules/Careers/ui/Positions/Positions'
import Benefits from '@/modules/Careers/ui/Benefits/Benefits'
import { CareersType } from '../../../../pages/careers'
import SectionFullPage from '@/app/layouts/SectionFullPage'

const CareersContent = ({ careers }: CareersType) => {
  return (
    <main>
      <SectionFullPage>
        <HeroCareers />
      </SectionFullPage>
      <Positions careers={careers} />
      <Benefits />
      <Footer />
    </main>
  )
}

export default CareersContent
