import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'

import styles from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    <section className={styles['hero']}>
      <Container>
        <div className={styles['hero__content']}>
          <h1 className={classNames('h1', styles['title'])}>
            <span>Explore</span>
            <span>
              Our <span>Projects</span>
            </span>
          </h1>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
