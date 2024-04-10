import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'

import styles from './ExploreTitle.module.scss'
const ExploreTitle = () => {
  return (
    <section>
      <Container>
        <h2 className={classNames('h1', styles['title'])}>
          Explore
          <span>
            our <span>projects</span>
          </span>
        </h2>
      </Container>
    </section>
  )
}

export default ExploreTitle
