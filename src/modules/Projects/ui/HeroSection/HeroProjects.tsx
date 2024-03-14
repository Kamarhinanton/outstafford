import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'

import styles from './HeroProjects.module.scss'

const HeroProjects = () => {
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

export default HeroProjects
