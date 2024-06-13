import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import CardTransformPerspective from '@/ui/CardTransformPerspective/CardTransformPerspective'

import styles from './Benefits.module.scss'

const benefitsData = [
  {
    title: 'Free Courses',
    description: 'New courses every month',
    image: '/images/Careers/1.jpg',
  },
  {
    title: 'Remote Work',
    description: 'All of our positions are remote',
    image: '/images/Careers/2.jpg',
  },
  {
    title: 'Performance Bonuses',
    description: 'Close projects faster and get paid more',
    image: '/images/Careers/3.jpg',
  },
  {
    title: 'Welcome Package',
    description: 'MacBook Pro or iMac for new devs',
    image: '/images/Careers/4.jpg',
  },
  {
    title: 'Paid Vacations',
    description: '2 times a year',
    image: '/images/Careers/6.jpg',
  },
  {
    title: 'Health Insurance',
    description: 'Full coverage, including dental',
    image: '/images/Careers/5.jpg',
  },
]

const Benefits = () => {
  return (
    <section className={styles['benefits']}>
      <Container>
        <div className={styles['benefits__content']}>
          <h2 className={classNames('h1', styles['title'])}>
            Our <span>benefits</span>
          </h2>
          <ul className={styles['benefits__content_list']}>
            {benefitsData.map((item) => (
              <li className={styles['item']} key={item.title}>
                <CardTransformPerspective
                  cursor={false}
                  className={styles['item__content']}
                  rotateRangeX={['10deg', '-10deg']}
                  rotateRangeY={['-10deg', '10deg']}
                >
                  {item.image && (
                    <BackgroundImage
                      className={styles['item__content_image']}
                      position={'cover'}
                      src={item.image}
                      alt={'picture'}
                    />
                  )}
                  <h3
                    className={classNames('h3', styles['item__content_title'])}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className={styles['item__content_description']}>
                      {item.description}
                    </p>
                  )}
                </CardTransformPerspective>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Benefits
