import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'

import styles from './SummaryCase.module.scss'

const summaryCaseData = [
  {
    title: '9 new Features',
    description:
      'of User Engagement by designing and launching of the new app for the Camber. Designed and launched new features. of User Engagement by designing and launching of the new app for the Camber. Designed and launched new features.',
  },
  {
    title: '28% Increase',
    description: 'of User Engagement',
  },
  {
    title: '15% Increase',
    description: 'of Amount of New Customers',
  },
  {
    title: 'Successfull Launch',
    description: 'of New Service',
  },
]

const SummaryCase = () => {
  return (
    <section className={styles['summary']}>
      <Container>
        <h2 className={'h2'}>Project Summary</h2>
        <ul className={styles['summary__content']}>
          {summaryCaseData.map((item) => (
            <li className={styles['summary__content_item']} key={item.title}>
              <h3 className={classNames(styles['title'], 'h3')}>
                {item.title}
              </h3>
              <p className={styles['description']}>{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default SummaryCase
