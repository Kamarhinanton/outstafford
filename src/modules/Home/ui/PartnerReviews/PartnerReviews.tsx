import React from 'react'
import Upwork from '../../../../../public/icons/social/upwork.svg'
import Clutch from '../../../../../public/icons/social/clutch.svg'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import styles from './PartnerReviews.module.scss'
import classNames from 'classnames'

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
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-partner-prev',
            nextEl: '.swiper-partner-next',
          }}
          className={styles['swiper']}
        >
          <SwiperSlide className={styles['swiper__slide']}>
            <BackgroundImage
              className={styles['image']}
              src={'/images/Home/preview.jpg'}
              alt={'picture'}
              position={'cover'}
            />
            <div className={styles['top-description']}>
              <p className={styles['top-description__text']}>
                <strong>
                  I can&apos;t say enough good things about Outstafford! As a
                  startup founder, I was in dire need of a top-notch mobile app
                  for my business.
                </strong>
              </p>
            </div>
            <p className={styles['bottom-description']}>
              <span>William Flemming</span>, CEO of Checkem
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles['swiper__slide']}>
            <BackgroundImage
              className={styles['image']}
              src={'/images/Home/preview.jpg'}
              alt={'picture'}
              position={'cover'}
            />
            <p>
              <strong>
                I can&apos;t say enough good things about Outstafford! As a
                startup founder, I was in dire need of a top-notch mobile app
                for my business.
              </strong>
            </p>
            <p className={styles['bottom-description']}>
              <span>William Flemming</span>, CEO of Checkem
            </p>
          </SwiperSlide>
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
