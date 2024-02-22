import React from 'react'
import Upwork from '../../../../../public/icons/social/upwork.svg'
import Clutch from '../../../../../public/icons/social/clutch.svg'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import classNames from 'classnames'
import { sliderData } from '@/modules/Home/ui/PartnerReviews/data'

import styles from './PartnerReviews.module.scss'

const PartnerReviews = () => {
  return (
    <section className={styles['partner-review']}>
      <div className={styles['partner-review__content']}>
        <div className={styles['partner-review__content_top']}>
          <h3 className={classNames(styles['title'], 'h3')}>Partner reviews</h3>
          <p className={styles['description']}>
            <span>More verified reviews on</span>
            <Clutch className={styles['clutch']} />
            <span>and</span>
            <Upwork className={styles['upwork']} />
          </p>
        </div>
        <Swiper
          speed={2000}
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-partner-prev',
            nextEl: '.swiper-partner-next',
          }}
          className={styles['swiper']}
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id} className={styles['swiper__slide']}>
              <BackgroundImage
                className={styles['image']}
                src={slide.preview}
                alt={'picture'}
                position={'cover'}
              />
              <div className={styles['top-description']}>
                <p className={styles['top-description__text']}>
                  <strong>{slide.description}</strong>
                </p>
              </div>
              <p className={styles['bottom-description']}>
                <span>{slide.author}</span>, {slide.position}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles['partner-review__content_button-group']}>
          <div
            className={classNames(
              styles['arrow'],
              styles['prev'],
              'swiper-partner-prev',
            )}
          />
          <div className={classNames(styles['arrow'], 'swiper-partner-next')} />
        </div>
      </div>
    </section>
  )
}

export default PartnerReviews
