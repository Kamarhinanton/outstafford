import React from 'react'
import Footer from '@/components/Footer/Footer'
import HeroCareers from '@/modules/Careers/ui/HeroCareers/HeroCareers'
import Positions from '@/modules/Careers/ui/Positions/Positions'
import Benefits from '@/modules/Careers/ui/Benefits/Benefits'

const CareersContent = () => {
  return (
    <main>
      <HeroCareers />
      <Positions />
      <Benefits />
      <Footer />
    </main>
  )
}

export default CareersContent
