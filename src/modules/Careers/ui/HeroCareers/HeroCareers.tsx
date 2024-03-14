import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'

import styles from './HeroCareers.module.scss'

const HeroCareers = () => {
  return (
    <section className={styles['hero']}>
      <Container>
        <div className={styles['hero__content']}>
          <h1 className={classNames('h1', styles['title'])}>
            <span>Explore our</span>
            <span>
              open <span>positions</span>
            </span>
          </h1>
        </div>
      </Container>
    </section>
  )
}

export default HeroCareers
