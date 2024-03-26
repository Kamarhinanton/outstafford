import React, { FC } from 'react'
import Container from '@/app/layouts/Container'
import TopicList from '@/ui/TopicList/TopicList'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import { FrontMatterType } from '@/utils/globalTypes'

import styles from './HeroInnerBlog.module.scss'

type HeroInnerType = {
  frontMatter: FrontMatterType
}

const HeroInnerBlog: FC<HeroInnerType> = ({ frontMatter }) => {
  return (
    <section className={styles['hero-inner']}>
      <Container>
        <div className={styles['hero-inner__content']}>
          {frontMatter.topics && <TopicList list={frontMatter.topics} />}
          <h1 className={classNames('h1', styles['title'])}>
            {frontMatter.title}
          </h1>
          <p className={styles['description']}>{frontMatter.description}</p>
          {frontMatter.preview && (
            <BackgroundImage
              position={'cover'}
              className={styles['hero-inner__content_img']}
              src={frontMatter.preview}
              alt={'picture'}
            />
          )}

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
