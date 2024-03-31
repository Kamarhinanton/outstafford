import React from 'react'
import Container from '@/app/layouts/Container'
import BackButton from '@/ui/BackButton/BackButton'
import { useRouter } from 'next/router'
import TopicList from '@/ui/TopicList/TopicList'
import classNames from 'classnames'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { ProjectHero } from '@/utils/globalTypes'

import styles from './HeroCaseSection.module.scss'

type HeroCase = {
  data: ProjectHero
}
const HeroCaseSection = ({ data }: HeroCase) => {
  const router = useRouter()

  return (
    <section className={styles['hero']}>
      <Container>
        <BackButton
          className={styles['hero__back']}
          callBackFunc={() => router.back()}
        />
        {data.topics && (
          <TopicList
            className={styles['hero__topic-list']}
            list={data.topics}
            dots={true}
          />
        )}
        {data.title && (
          <h1 className={classNames(styles['title'], 'h1')}>{data.title}</h1>
        )}
        <div className={styles['hero__content']}>
          <ul className={styles['hero__content_list']}>
            {data.columns?.map((item) => (
              <li key={item.title} className={styles['item']}>
                <p className={styles['item__title']}>{item.title}</p>
                <ul className={styles['item__list']}>
                  {item.topics?.map((topic) => (
                    <li key={topic} className={styles['item__list_topic']}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className={styles['hero__content_description']}>
            {data.description && <p>{data.description}</p>}
            <ButtonPrimary
              className={styles['button']}
              arrows={true}
              variant={'dark-green'}
              size={'large'}
              href={data.href}
            >
              View Live
            </ButtonPrimary>
          </div>
        </div>
        {data.preview && (
          <BackgroundImage
            className={styles['hero__image']}
            src={data.preview}
            alt={'picture'}
            position={'cover'}
          />
        )}
      </Container>
    </section>
  )
}

export default HeroCaseSection
