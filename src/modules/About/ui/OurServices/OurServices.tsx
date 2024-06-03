import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import TopicList from '@/ui/TopicList/TopicList'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './OurServices.module.scss'

const data = [
  {
    title: 'Mobile App Development',
    id: 1,
    list: ['React Native', 'iOS', 'Android'],
    url: '/images/About/1.jpg',
  },
  {
    title: 'Web App Development',
    id: 2,
    list: ['Next.js', 'React.js', 'Node.js'],
    url: '/images/About/2.jpg',
  },
  {
    title: 'AI App Development',
    id: 3,
    list: ['AI MVPs', 'Web AI', 'Mobile AI'],
    url: '/images/About/3.jpg',
  },
  {
    title: 'AI Integrations',
    id: 4,
    list: ['OpenAI', 'LLama', 'GPT4'],
    url: '/images/About/4.jpg',
  },
]

const OurServices = () => {
  return (
    <section className={styles['services']}>
      <Container>
        <h2 className={classNames('h1', styles['title'])}>
          Our <span>services</span>
        </h2>
        <ul className={styles['services__content']}>
          {data.map((item) => (
            <li key={item.id} className={styles['services__content_item']}>
              <BackgroundImage
                position={'cover'}
                src={item.url}
                alt={'picture'}
                className={styles['image']}
              />
              <h3 className={classNames(styles['text'], 'h3')}>{item.title}</h3>
              <TopicList
                className={styles['list']}
                list={item.list}
                variants={'large'}
                color={'grey'}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default OurServices
