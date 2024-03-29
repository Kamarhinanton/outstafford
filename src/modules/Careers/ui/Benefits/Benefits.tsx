import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './Benefits.module.scss'

const benefitsData = [
  {
    title: 'Supportive TeamCase',
    description: 'Supportive TeamCase',
  },
  {
    title: 'Free Courses',
    description: 'Supportive TeamCase',
    image: '/images/Careers/1.png',
  },
  {
    title: 'Regular Bonuses',
    description: 'Supportive TeamCase',
  },
  {
    title: 'MacBooks and iMacs',
  },
  {
    title: 'Paid Vacations',
    description: 'Paid Vacations',
    image: '/images/Careers/3.png',
  },
  {
    title: 'Free Health Insurance',
    description: 'Paid Vacations',
    image: '/images/Careers/2.png',
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
                {item.image && (
                  <BackgroundImage
                    className={styles['item__image']}
                    position={'cover'}
                    src={item.image}
                    alt={'picture'}
                  />
                )}
                <h3 className={classNames('h3', styles['item__title'])}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className={styles['item__description']}>
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Benefits
