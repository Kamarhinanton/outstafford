import React from 'react'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'
import { CareersType } from '../../../../../pages/careers'
import TopicList from '@/ui/TopicList/TopicList'

import styles from './Positions.module.scss'

const Positions = ({ careers }: CareersType) => {
  return (
    <section className={styles['positions']}>
      <Container>
        <ul className={styles['positions__list']}>
          {careers.map((career) => (
            <li className={styles['link']} key={career.id}>
              <div className={styles['link__description']}>
                <h2 className={classNames('h2', styles['title'])}>
                  {career.title}
                </h2>
                {career.topics && (
                  <TopicList
                    list={career.topics}
                    color={'grey'}
                    variants={'x-large'}
                    className={styles['topics']}
                  />
                )}
              </div>
              <ButtonPrimary
                href={`/careers/${career.id}`}
                arrows={true}
                variant={'green'}
              >
                Open
              </ButtonPrimary>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Positions
