import React, { useEffect, useState } from 'react'
import HeroSection from '@/modules/Home/ui/HeroSection/HeroSection'
import OurPortfolio from '@/modules/Home/ui/OurPortfolio/OurPortfolio'
import dynamic from 'next/dynamic'
import { breakpointMob } from '@/utils/variables'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import PartnerReviews from '@/modules/Home/ui/PartnerReviews/PartnerReviews'
import Container from '@/app/layouts/Container'
// import OurBlog from '@/modules/Home/ui/OurBlog/OurBlog'
import CTA from '@/modules/Home/ui/CTA/CTA'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import Footer from '@/components/Footer/Footer'
import { Swiper as SwiperType } from 'swiper/types'
import { AppDispatch } from '@/store/store'
import { useDispatch } from 'react-redux'
import { setIsBottom } from '@/store/reducers/detectSliderPosition'
import { setIsTop } from '@/store/reducers/detectSliderPosition'

import styles from './HomeContent.module.scss'
import 'swiper/css'

const MouseIndicator = dynamic(
  () => import('@/components/MouseIndicatorScroll/ui/MouseIndicatorScroll'),
  {
    ssr: false,
  },
)

const BottomSection = () => {
  return (
    <Container size={'small'}>
      <div className={styles['bottom-section']}>
        <div className={styles['bottom-section__top']}>
          <PartnerReviews />
          {/*<OurBlog />*/}
        </div>
        <div className={styles['bottom-section__bottom']}>
          <CTA />
        </div>
      </div>
    </Container>
  )
}

const SwiperHomeComponent = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const { width } = useWindowDimensions()
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    if (width <= breakpointMob && swiper) {
      swiper.destroy(true, true)
    }
  }, [width, swiper])

  const handleSlideChange = () => {
    if (swiper?.isBeginning) {
      dispatch(setIsTop(true))
      dispatch(setIsBottom(false))
    } else if (swiper?.isEnd) {
      dispatch(setIsBottom(true))
      dispatch(setIsTop(false))
    } else if (!swiper?.isBeginning && !swiper?.isEnd) {
      dispatch(setIsBottom(false))
      dispatch(setIsTop(false))
    }
  }

  return (
    <Swiper
      className={styles['slider']}
      direction={'vertical'}
      slidesPerView={1}
      mousewheel={true}
      pagination={{
        clickable: true,
        verticalClass: styles['pagination'],
        bulletClass: styles['pagination__bullet'],
        bulletActiveClass: styles['active'],
      }}
      modules={[Mousewheel, Pagination]}
      speed={2000}
      onSwiper={(e) => setSwiper(e)}
      onSlideChange={handleSlideChange}
      wrapperClass={styles['slider__wrapper']}
    >
      {sectionsArray.map((section) => (
        <SwiperSlide key={section.key}>{section}</SwiperSlide>
      ))}
    </Swiper>
  )
}

const sectionsArray = [
  <HeroSection key="hero" />,
  <OurPortfolio key="portfolio" />,
  <BottomSection key="bottom" />,
  <Footer key="footer" />,
]

const HomeContent = () => {
  const { width } = useWindowDimensions()

  return (
    <main>
      {width > breakpointMob && <MouseIndicator />}
      <div id="sliderPopUp" />
      <SwiperHomeComponent />
    </main>
  )
}

export default HomeContent
