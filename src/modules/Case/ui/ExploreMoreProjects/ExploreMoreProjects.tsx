import React from 'react'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import classNames from 'classnames'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import TopicList from '@/ui/TopicList/TopicList'
import { CardBlogType } from '@/utils/globalTypes'

import styles from './ExploreMoreProjects.module.scss'
import 'swiper/css'

const swiperProps: SwiperProps = {
  slidesPerView: 'auto',
  speed: 1000,
  spaceBetween: 16,
}

const ExploreMoreProjects = ({ projects }: { projects: CardBlogType[] }) => {
  return (
    <section className={classNames(styles['explore'])}>
      <div className={styles['explore__content']}>
        <Swiper {...swiperProps}>
          {projects.map((item) => (
            <SwiperSlide className={styles['card']} key={item.title}>
              <Link
                scroll={false}
                href={item.href}
                className={styles['card__content']}
              >
                <BackgroundImage
                  position={'cover'}
                  src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${item.preview}`}
                  alt={'picture'}
                  className={styles['card__content_img']}
                />
                <div className={styles['card__content_text']}>
                  <TopicList
                    list={item.topics}
                    dots={true}
                    color={'grey'}
                    variants={'small'}
                    className={styles['topics']}
                  />
                  <h3 className={classNames(styles['title'], 'h3')}>
                    {item.title}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ExploreMoreProjects
