import React from 'react'
import Container from '@/app/layouts/Container'

import styles from './FoundedSection.module.scss'

const data = [
  {
    title: '2020',
    description: 'year founded',
  },
  {
    title: 'Charlotte, NC',
    description: 'based',
  },
  {
    title: '30',
    description: 'members worldwide',
  },
]

const FoundedSection = () => {
  return (
    <section className={styles['founded']}>
      <Container size={'small'}>
        <ul className={styles['founded__content']}>
          {data.map((item) => (
            <li key={item.title} className={styles['founded__content_item']}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default FoundedSection
