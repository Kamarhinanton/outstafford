import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { ChallengesProjectType } from '@/utils/globalTypes'

import styles from './ChallengesCase.module.scss'

type ChallengesCaseType = {
  challenges: ChallengesProjectType
}

const ChallengesCase = ({ challenges }: ChallengesCaseType) => {
  return challenges ? (
    <section className={styles['challenges']}>
      <Container>
        {challenges.title && (
          <h2 className={classNames(styles['title'], 'h2')}>
            {challenges.title}
          </h2>
        )}
        <ul className={styles['list']}>
          {challenges.list?.map((item) => (
            <li className={styles['list__item']} key={item.title}>
              {item.title && (
                <h3 className={classNames(styles['list__item_title'], 'h3')}>
                  {item.title}
                </h3>
              )}
              {item.description && (
                <p className={styles['list__item_description']}>
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  ) : null
}

export default ChallengesCase
