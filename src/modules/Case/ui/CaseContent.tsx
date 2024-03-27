import React from 'react'
import HeroCaseSection from '@/modules/Case/ui/HeroCaseSection/HeroCaseSection'
import Footer from '@/components/Footer/Footer'
import ChallengesCase from '@/modules/Case/ui/ChallengesCase/ChallengesCase'

const CaseContent = () => {
  return (
    <main>
      <HeroCaseSection />
      <ChallengesCase />
      <Footer />
    </main>
  )
}

export default CaseContent
