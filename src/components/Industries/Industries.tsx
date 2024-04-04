import React, { FC } from 'react'
import { blogData } from '@/modules/Blog/ui/BlogSection/data'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import classNames from 'classnames'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { breakpointMob } from '@/utils/variables'
import TopicList from '@/ui/TopicList/TopicList'

import styles from './Industries.module.scss'
import 'swiper/css'

const swiperProps: SwiperProps = {
  slidesPerView: 'auto',
  speed: 1000,
  spaceBetween: 16,
  breakpoints: {
    [breakpointMob + 1]: {
      spaceBetween: 22,
    },
  },
}

type IndustriesType = {
  innerVariant?: boolean
  title?: string
}

const Industries: FC<IndustriesType> = ({ innerVariant, title }) => {
  return (
    <section
      className={classNames(styles['industries'], {
        [styles['inner']]: innerVariant,
      })}
    >
      {title && (
        <h2 className={classNames(styles['industries__title'], 'h2')}>
          {title}
        </h2>
      )}
      <div className={styles['industries__content']}>
        <Swiper {...swiperProps}>
          {blogData.map((item) => (
            <SwiperSlide className={styles['card']} key={item.title}>
              <Link
                scroll={false}
                href={item.href}
                className={styles['card__content']}
              >
                <BackgroundImage
                  position={'cover'}
                  src={item.preview}
                  alt={'picture'}
                  className={styles['card__content_img']}
                />
                <div className={styles['card__content_text']}>
                  <TopicList
                    className={styles['topics']}
                    list={item.topics}
                    variants={'x-large'}
                    color={'transparent'}
                  />
                  <h4 className={classNames(styles['title'], 'h4')}>
                    {item.title}
                  </h4>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Industries
