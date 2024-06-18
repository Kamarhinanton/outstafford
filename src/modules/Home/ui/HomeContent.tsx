import React, { useEffect, useRef } from 'react'
import HeroSection from '@/modules/Home/ui/HeroSection/HeroSection'
import OurPortfolio from '@/modules/Home/ui/OurPortfolio/OurPortfolio'
import dynamic from 'next/dynamic'
import { breakpointMob } from '@/utils/variables'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import Container from '@/app/layouts/Container'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { EffectCreative, Mousewheel, Pagination } from 'swiper/modules'
import Footer from '@/components/Footer/Footer'
import { Swiper as SwiperType } from 'swiper/types'
import SwiperInit from 'swiper'
import { AppDispatch } from '@/store/store'
import { useDispatch } from 'react-redux'
import { setIsBottom } from '@/store/reducers/detectSliderPosition'
import { setIsTop } from '@/store/reducers/detectSliderPosition'
import classNames from 'classnames'
import SectionFullPage from '@/app/layouts/SectionFullPage'

import styles from './HomeContent.module.scss'
import 'swiper/css'

const Spot = dynamic(() => import('@/modules/Home/ui/HeroSection/Spot/Spot'), {
  ssr: false,
})

const MouseIndicator = dynamic(
  () => import('@/components/MouseIndicatorScroll/ui/MouseIndicatorScroll'),
  {
    ssr: false,
  },
)

const Blog = dynamic(() => import('@/modules/Home/ui/OurBlog/OurBlog'), {
  ssr: false,
})

const Reviews = dynamic(
  () => import('@/modules/Home/ui/PartnerReviews/PartnerReviews'),
)

const CTADynamic = dynamic(() => import('@/components/CTA/CTA'))

const BottomSection = () => {
  return (
    <div className={styles['bottom-section']}>
      <Container size={'small'}>
        <div className={styles['bottom-section__content']}>
          <Reviews />
          <Blog />
        </div>
      </Container>
    </div>
  )
}
const SwiperHomeComponent = () => {
  const { width } = useWindowDimensions()
  const dispatch: AppDispatch = useDispatch()
  const swiperRef = useRef<SwiperType | null>(null)

  const handleSlideChange = () => {
    if (swiperRef.current?.isBeginning) {
      dispatch(setIsTop(true))
      dispatch(setIsBottom(false))
    } else if (swiperRef.current?.isEnd) {
      dispatch(setIsBottom(true))
      dispatch(setIsTop(false))
    } else if (!swiperRef.current?.isBeginning && !swiperRef.current?.isEnd) {
      dispatch(setIsBottom(false))
      dispatch(setIsTop(false))
    }
  }

  const swiperProps: SwiperProps = {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: '.current-pagination',
      clickable: true,
      verticalClass: styles['pagination'],
      bulletClass: styles['pagination__bullet'],
      bulletActiveClass: styles['active'],
    },
    modules: [Mousewheel, Pagination, EffectCreative],
    speed: 1500,
    wrapperClass: styles['slider__wrapper'],
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: [0, '-20%', -1],
      },
      next: {
        translate: [0, '100%', 0],
      },
    },
    onSlideChange: handleSlideChange,
    className: classNames(styles['slider'], 'current-swiper'),
    onInit: (swiper) => {
      swiperRef.current = swiper
    },
  }

  useEffect(() => {
    if (width <= breakpointMob) {
      swiperRef.current?.destroy(true, true)
    }
    if (width > breakpointMob && swiperRef.current?.destroyed) {
      swiperRef.current = new SwiperInit('.current-swiper', swiperProps)
      swiperRef.current.on('slideChange', handleSlideChange)
    }
  }, [width])

  useEffect(() => {
    return () => {
      dispatch(setIsTop(true))
      dispatch(setIsBottom(false))
    }
  }, [])

  return (
    <>
      <div className="current-pagination" />
      <Swiper {...swiperProps}>
        {sectionsArray.map((section) => (
          <SwiperSlide key={section.key}>
            <SectionFullPage>{section}</SectionFullPage>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

const sectionsArray = [
  <>
    <HeroSection key="hero" />
    <Spot />
  </>,
  <OurPortfolio key="portfolio" />,
  <BottomSection key="bottom" />,
  <CTADynamic key="cta" />,
  <Footer className={styles['footer-no-padding']} key="footer" />,
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
