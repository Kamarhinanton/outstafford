import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { ProjectChallenges } from '@/utils/globalTypes'

import styles from './ChallengesCase.module.scss'

type ChallengesCaseType = {
  data: ProjectChallenges
}

const ChallengesCase = ({ data }: ChallengesCaseType) => {
  return (
    <section className={styles['challenges']}>
      <Container>
        {data.title && (
          <h2 className={classNames(styles['title'], 'h2')}>{data.title}</h2>
        )}
        <ul className={styles['list']}>
          {data.list?.map((item) => (
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
