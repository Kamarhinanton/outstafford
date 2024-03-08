import React from 'react'
import { blogData } from '@/modules/Projects/ui/BlogSection/data'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './BlogSection.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'

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
      <div className={styles['blog__content']}>
        {blogData.map((card, index) => (
          <AnimatedElement
            delay={index % 3 === 1 ? 0.3 : 0}
            reverse={index % 3 === 2}
            key={card.title}
            className={styles['card']}
          >
            <Link href={card.href} className={styles['card__top']}>
              <BackgroundImage
                className={styles['image']}
                position={'cover'}
                src={card.preview}
                alt="picture"
              />
            </Link>
            <div className={styles['card__bottom']}>
              {card.topics.map((topic) => (
                <span key={topic} className={styles['topic']}>
                  {topic}
                </span>
              ))}
            </div>
            <h3 className={classNames(styles['title'], 'h3')}>{card.title}</h3>
          </AnimatedElement>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
