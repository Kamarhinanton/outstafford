import React from 'react'
import HeroCaseSection from '@/modules/Case/ui/HeroCaseSection/HeroCaseSection'
import Footer from '@/components/Footer/Footer'
import ChallengesCase from '@/modules/Case/ui/ChallengesCase/ChallengesCase'
import MosaicSection from '@/modules/Case/ui/MosaicSection/MosaicSection'

const mosaicData1 = {
  description: {
    title: 'The story',
    textTop:
      'Space Needle visitors can now access their photos and videos within seconds, eliminating the previous 10-15 minute wait time. As a result, user satisfaction has increased, leading to a 20% boost in app usage within the first month. Space Needle visitors can now access their photos and videos within seconds, eliminating the previous 10-15 minute wait time. As a result, user satisfaction has increased, leading to a 20% boost in app usage within the first month.',
  },
  mosaic: {
    topImg: '/images/Home/preview.jpg',
    bottomImg: '/images/Home/preview.jpg',
    doubleImg: {
      img1: '/images/Home/preview.jpg',
      img2: '/images/Home/preview.jpg',
    },
  },
}

const mosaicData2 = {
  description: {
    title: 'Results',
    textTop:
      'Space Needle visitors can now access their photos and videos within seconds, eliminating the previous 10-15 minute wait time. As a result, user satisfaction has increased, leading to a 20% boost in app usage within the first month. Space Needle visitors can now access their photos and videos within seconds, eliminating the previous 10-15 minute wait time. ',
    quote: {
      text: 'Space Needle visitors can now access their photos and videos within seconds, eliminating the previous 10-15 minute wait time. As a result, user satisfaction has increased, leading to a 20% boost in app usage within the first month.',
      author: 'Artem Larin',
      position: 'CEO of Outstafford',
      img: '/images/Home/preview.jpg',
    },
    textBottom:
      'Space Needle visitors can now access their photos and videos within seconds, eliminating the previous 10-15 minute wait time. As a result, user satisfaction has increased, leading to a 20% boost in app usage within the first month. Space Needle visitors can now access their photos and videos within seconds, eliminating the previous 10-15 minute wait time.',
  },
  mosaic: {
    topImg: '/images/Home/preview.jpg',
    bottomImg: '/images/Home/preview.jpg',
  },
}
const CaseContent = () => {
  return (
    <main>
      <HeroCaseSection />
      <ChallengesCase />
      <MosaicSection mosaicData={mosaicData1} />
      <MosaicSection mosaicData={mosaicData2} />
      <Footer />
    </main>
  )
}

export default CaseContent
