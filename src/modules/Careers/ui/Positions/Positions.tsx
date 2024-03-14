import React from 'react'
import Container from '@/app/layouts/Container'
import { positionsData } from '@/modules/Careers/ui/Positions/data'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'

import styles from './Positions.module.scss'

const Positions = () => {
  return (
    <section className={styles['positions']}>
      <Container>
        <ul className={styles['positions__list']}>
          {positionsData.map((item) => (
            <li className={styles['link']} key={item.title}>
              <div className={styles['link__description']}>
                <h2 className={classNames('h2', styles['title'])}>
                  {item.title}
                </h2>
                <ul className={styles['topics']}>
                  {item.topics.map((topic) => (
                    <li className={styles['topics__topic']} key={topic}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <ButtonPrimary href={'/'} arrows={true} variant={'green'}>
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
