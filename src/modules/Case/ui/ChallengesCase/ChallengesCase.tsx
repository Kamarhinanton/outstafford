import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'

import styles from './ChallengesCase.module.scss'

const challengesData = [
  {
    title: 'Business expansion and launch of new services',
    description:
      'Camber wanted to reflect the company’s changes and growth through design. Great service imply great design.',
  },
  {
    title: 'Attraction of a new audience',
    description:
      "Competition in the market is increasing, and updated design should strengthen the company's place in the market and attract a new audience.",
  },
  {
    title: 'Business expansion and launch of new services',
    description:
      'Camber wanted to reflect the company’s changes and growth through design. Great service imply great design.',
  },
]

const ChallengesCase = () => {
  return (
    <section className={styles['challenges']}>
      <Container>
        <h2 className={classNames(styles['title'], 'h2')}>Challenges</h2>
        <ul className={styles['list']}>
          {challengesData.map((item) => (
            <li className={styles['list__item']} key={item.title}>
              <h3 className={classNames(styles['list__item_title'], 'h3')}>
                {item.title}
              </h3>
              <p className={styles['list__item_description']}>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default ChallengesCase
