import React from 'react'
import Footer from '@/components/Footer/Footer'
import HeroCareers from '@/modules/Careers/ui/HeroCareers/HeroCareers'
import Positions from '@/modules/Careers/ui/Positions/Positions'
import Benefits from '@/modules/Careers/ui/Benefits/Benefits'
import { CareersType } from '@/utils/globalTypes'

const CareersContent = ({ careers }: CareersType) => {
  return (
    <main>
      <HeroCareers />
      <Positions careers={careers} />
      <Benefits />
      <Footer />
    </main>
  )
}

export default CareersContent
