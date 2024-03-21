import React, { FC } from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Link from 'next/link'
import { BlogSectionType } from '@/modules/Projects/ui/ProjectsContent'
import { AnimatePresence } from 'framer-motion'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'

import styles from './BlogPageSection.module.scss'
const BlogPageSection: FC<BlogSectionType> = ({ filteredBlogData }) => {
  return (
    <section className={styles['blog']}>
      <Container>
        <div className={styles['blog__content']}>
          <AnimatePresence mode={'wait'}>
            {filteredBlogData && filteredBlogData.length > 0 ? (
              filteredBlogData.map((item) => (
                <Link
                  scroll={false}
                  key={item.title}
                  href={item.href}
                  className={styles['card']}
                >
                  <AnimatedElement
                    key={item.title}
                    className={styles['card__content']}
                  >
                    <BackgroundImage
                      position={'cover'}
                      src={item.preview}
                      alt={'picture'}
                      className={styles['card__content_img']}
                    />
                    <div className={styles['card__content_text']}>
                      <ul className={styles['topics']}>
                        {item.topics.map((topic) => (
                          <li className={styles['topics__topic']} key={topic}>
                            {topic}
                          </li>
                        ))}
                      </ul>
                      <h4 className={classNames(styles['title'], 'h4')}>
                        {item.title}
                      </h4>
                    </div>
                  </AnimatedElement>
                </Link>
              ))
            ) : (
              <h3>No results found</h3>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}

export default BlogPageSection
