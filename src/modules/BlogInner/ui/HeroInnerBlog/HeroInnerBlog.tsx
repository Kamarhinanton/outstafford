import React from 'react'
import Container from '@/app/layouts/Container'
import TopicList from '@/ui/TopicList/TopicList'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import BackButtonVariant from '@/ui/BackButtonVariant/BackButtonVariant'
import { SingleBlogResultType } from '@/utils/globalTypes'

import styles from './HeroInnerBlog.module.scss'

const HeroInnerBlog = ({ blog }: { blog: SingleBlogResultType }) => {
  return (
    <section className={styles['hero-inner']}>
      <Container>
        <BackButtonVariant className={styles['hero-inner__back']} />
        <div className={styles['hero-inner__content']}>
          {blog.topics && (
            <TopicList list={blog.topics} variants={'x-large'} color={'grey'} />
          )}
          <h1 className={classNames('h1', styles['title'])}>{blog.title}</h1>
          <p className={styles['description']}>{blog.description}</p>
          {blog.preview && (
            <BackgroundImage
              position={'cover'}
              className={styles['hero-inner__content_img']}
              src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${blog.preview}`}
              alt={'picture'}
            />
          )}
          {blog.link && (
            <ButtonPrimary
              className={styles['hero-inner__content_btn']}
              size={'large'}
              variant={'dark-green'}
              href={blog.link}
            >
              Summarize the article
            </ButtonPrimary>
          )}
        </div>
      </Container>
    </section>
  )
}

export default HeroInnerBlog
