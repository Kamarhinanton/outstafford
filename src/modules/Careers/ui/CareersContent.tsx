import React from 'react'
import Footer from '@/components/Footer/Footer'
import HeroCareers from '@/modules/Careers/ui/HeroCareers/HeroCareers'
import Positions from '@/modules/Careers/ui/Positions/Positions'

const CareersContent = () => {
  return (
    <main>
      <HeroCareers />
      <Positions />
      <Footer />
    </main>
  )
}

export default CareersContent
