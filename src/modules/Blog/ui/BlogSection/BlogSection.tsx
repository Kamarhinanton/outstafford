import React, { FC } from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import { BlogSectionType } from '@/utils/globalTypes'
import TopicList from '@/ui/TopicList/TopicList'

import styles from './BlogSection.module.scss'
const BlogSection: FC<BlogSectionType> = ({ filteredBlogData }) => {
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
                  href={`/blog/${item.href}`}
                  className={styles['card']}
                >
                  <AnimatedElement className={styles['card__content']}>
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

export default BlogSection
