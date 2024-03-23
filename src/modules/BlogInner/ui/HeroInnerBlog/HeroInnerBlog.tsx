import React from 'react'
import Container from '@/app/layouts/Container'
import TopicList from '@/ui/TopicList/TopicList'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'

import styles from './HeroInnerBlog.module.scss'

const HeroInnerBlog = () => {
  return (
    <section className={styles['hero-inner']}>
      <Container>
        <div className={styles['hero-inner__content']}>
          <TopicList list={['AI', 'Tech']} />
          <h1 className={classNames('h1', styles['title'])}>
            State of AI Companion apps
          </h1>
          <p className={styles['description']}>
            Ten efficient tips by advertising genius David Ogilvy. Here Tubik
            Studio designers consider their strong points, highly practical in
            web and app UI/UX design.
          </p>
          <BackgroundImage
            position={'cover'}
            className={styles['hero-inner__content_img']}
            src={'/images/Home/preview.jpg'}
            alt={'picture'}
          />
          <ButtonPrimary
            className={styles['hero-inner__content_btn']}
            size={'large'}
            variant={'dark-green'}
          >
            Summarize the article
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}

export default HeroInnerBlog
