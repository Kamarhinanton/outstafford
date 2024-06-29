import React from 'react'
import Container from '@/app/layouts/Container'
import TopicList from '@/ui/TopicList/TopicList'
import classNames from 'classnames'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import BackButtonVariant from '@/ui/BackButtonVariant/BackButtonVariant'
import {
  HeroColumnsProjectType,
  HeroProjectType,
  TopicType,
} from '@/utils/globalTypes'

import styles from './HeroCaseSection.module.scss'

type HeroCase = {
  hero: HeroProjectType
  project_topics: {
    data: TopicType[]
  }
  hero_columns: HeroColumnsProjectType[]
}
const HeroCaseSection = ({ hero, hero_columns, project_topics }: HeroCase) => {
  const topics = project_topics.data.map((topic) => topic.attributes.topic)
  return hero ? (
    <section className={styles['hero']}>
      <Container>
        <BackButtonVariant className={styles['hero__back']} />
        {project_topics && (
          <TopicList
            className={styles['hero__topic-list']}
            list={topics}
            dots={true}
            color={'grey'}
          />
        )}
        {hero.title && (
          <h1 className={classNames(styles['title'], 'h1')}>{hero.title}</h1>
        )}
        <div className={styles['hero__content']}>
          <ul className={styles['hero__content_list']}>
            {hero_columns?.map((item) => (
              <li key={item.title} className={styles['item']}>
                {item.title && (
                  <p className={styles['item__title']}>{item.title}</p>
                )}
                <ul className={styles['item__list']}>
                  {item.topic?.map((name) => (
                    <li key={name.title} className={styles['item__list_topic']}>
                      {name.title}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className={styles['hero__content_description']}>
            {hero.description && <p>{hero.description}</p>}
            <ButtonPrimary
              target="_blank"
              className={styles['button']}
              arrows={true}
              variant={'dark-green'}
              size={'large'}
              href={hero.link}
            >
              View Live
            </ButtonPrimary>
          </div>
        </div>
        {hero.preview && (
          <BackgroundImage
            className={styles['hero__image']}
            src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${hero.preview.data.attributes.url}`}
            alt={'picture'}
            position={'cover'}
          />
        )}
      </Container>
    </section>
  ) : null
}

export default HeroCaseSection
