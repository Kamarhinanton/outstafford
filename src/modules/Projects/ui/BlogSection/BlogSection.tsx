import React from 'react'
import { blogData } from '@/modules/Projects/ui/BlogSection/data'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './BlogSection.module.scss'
import classNames from 'classnames'

const categories = [
  'All',
  'Healthcare',
  'Dating',
  'Location-based',
  'Travel',
  'Fintech',
  'E-Commerce',
  'Gig economy',
  'Social media',
]

const BlogSection = () => {
  return (
    <section className={styles['blog']}>
      <div className={styles['menu']}>
        <ul className={styles['menu__categories']}>
          {categories.map((category) => (
            <li className={styles['menu__categories_category']} key={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <ul className={styles['blog__content']}>
        {blogData.map((card) => (
          <li key={card.title} className={styles['card']}>
            <div className={styles['card__top']}>
              <BackgroundImage
                position={'cover'}
                src={card.preview}
                alt="picture"
              />
            </div>
            <div className={styles['card__bottom']}>
              {card.topics.map((topic) => (
                <span key={topic} className={styles['topic']}>
                  {topic}
                </span>
              ))}
            </div>
            <h3 className={classNames(styles['title'], 'h3')}>{card.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogSection
