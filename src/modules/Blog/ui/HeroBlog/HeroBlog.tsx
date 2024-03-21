import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'

import styles from './HeroBlog.module.scss'
const HeroBlog = () => {
  return (
    <section className={styles['hero-blog']}>
      <Container>
        <div className={styles['hero-blog__content']}>
          <h1 className={classNames('h1', styles['hero-blog__content_title'])}>
            Outstafford <span>Blog</span>
          </h1>
        </div>
      </Container>
    </section>
  )
}

export default HeroBlog
