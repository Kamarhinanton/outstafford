import React from 'react'
import Container from '@/app/layouts/Container'
import BackButton from '@/ui/BackButton/BackButton'
import { useRouter } from 'next/router'
import TopicList from '@/ui/TopicList/TopicList'
import classNames from 'classnames'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './HeroCaseSection.module.scss'

const dataCase = [
  {
    title: 'Client',
    topics: ['Camber'],
  },
  {
    title: 'Involvement',
    topics: ['UI/UX Design', 'Graphic Design', 'Motion Design'],
  },
  {
    title: 'Deliverables',
    topics: ['Mobile App', 'AR experience'],
  },
]
const HeroCaseSection = () => {
  const router = useRouter()

  return (
    <section className={styles['hero']}>
      <Container>
        <BackButton
          className={styles['hero__back']}
          callBackFunc={() => router.back()}
        />
        <TopicList
          className={styles['hero__topic-list']}
          list={['Mobile', 'AI App']}
        />
        <h1 className={classNames(styles['title'], 'h1')}>Checkem</h1>
        <div className={styles['hero__content']}>
          <ul className={styles['hero__content_list']}>
            {dataCase.map((item) => (
              <li key={item.title} className={styles['item']}>
                <p className={styles['item__title']}>{item.title}</p>
                <ul className={styles['item__list']}>
                  {item.topics.map((topic) => (
                    <li key={topic} className={styles['item__list_topic']}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className={styles['hero__content_description']}>
            <p>
              Space Needle visitors can now access their photos and videos
              within seconds, eliminating the previous 10-15 minute wait time.
              As a result, user satisfaction has increased, leading to a 20%
              boost in app usage within the first month.
            </p>
            <ButtonPrimary
              className={styles['button']}
              arrows={true}
              variant={'dark-green'}
              size={'large'}
            >
              View Live
            </ButtonPrimary>
          </div>
        </div>
        <BackgroundImage
          className={styles['hero__image']}
          src={'/images/Home/preview.jpg'}
          alt={'picture'}
          position={'cover'}
        />
      </Container>
    </section>
  )
}

export default HeroCaseSection
