import React from 'react'
import HeroSection from '@/modules/Home/ui/HeroSection/HeroSection'
import OurPortfolio from '@/modules/Home/ui/OurPortfolio/OurPortfolio'
import dynamic from 'next/dynamic'
import { breakpointMob } from '@/utils/variables'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import PartnerReviews from '@/modules/Home/ui/PartnerReviews/PartnerReviews'
import Container from '@/app/layouts/Container'
import OurBlog from '@/modules/Home/ui/OurBlog/OurBlog'
import CTA from '@/modules/Home/ui/CTA/CTA'

import styles from './HomeContent.module.scss'

const MouseIndicator = dynamic(
  () => import('@/components/MouseIndicatorScroll/ui/MouseIndicatorScroll'),
  {
    ssr: false,
  },
)

const HomeContent = () => {
  const { width } = useWindowDimensions()

  return (
    <main>
      {width > breakpointMob && <MouseIndicator />}
      <HeroSection />
      <OurPortfolio />
      <div className={styles['fourth-section']}>
        <Container size={'small'}>
          <div className={styles['fourth-section__content']}>
            <div className={styles['fourth-section__content_top']}>
              <PartnerReviews />
              {/*<OurBlog />*/}
            </div>
            <div className={styles['fourth-section__content_bottom']}>
              <CTA />
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}

export default HomeContent
