import React, { FC } from 'react'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import classNames from 'classnames'
import Link from 'next/link'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import { AnimatePresence } from 'framer-motion'
import { BlogSectionType } from '@/utils/globalTypes'

import styles from './BlogProjectSection.module.scss'

const categories = [
  'Healthcare',
  'Dating',
  'Location-based',
  'Travel',
  'Fintech',
  'E-Commerce',
  'Gig economy',
  'Social media',
]

const BlogProjectSection: FC<BlogSectionType> = ({
  filteredBlogData,
  handleClick,
  activeCategory,
  handleScroll,
}) => {
  const navigationOnClick = (category: string) => {
    handleClick && handleClick(category)
    handleScroll && handleScroll()
  }
  return (
    <section className={styles['blog']}>
      <div className={styles['menu']}>
        <ul className={styles['menu__categories']}>
          {categories.map((category) => (
            <li
              onClick={() => navigationOnClick(category)}
              className={classNames(styles['menu__categories_category'], {
                [styles['active']]:
                  activeCategory && activeCategory.includes(category),
              })}
              key={category}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['blog__content']}>
        <AnimatePresence mode={'wait'}>
          {filteredBlogData && filteredBlogData.length > 0 ? (
            filteredBlogData.map((card, index) => (
              <AnimatedElement
                delay={index % 3 === 1 ? 0.3 : 0}
                key={card.title}
                className={styles['card']}
              >
                <Link
                  scroll={false}
                  href={`/projects/${card.href}`}
                  className={styles['card__top']}
                >
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
                <h3 className={classNames(styles['title'], 'h3')}>
                  {card.title}
                </h3>
              </AnimatedElement>
            ))
          ) : (
            <h3>No results found</h3>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default BlogProjectSection
