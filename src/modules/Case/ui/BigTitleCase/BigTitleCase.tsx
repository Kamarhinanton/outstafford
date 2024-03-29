import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'

import styles from './BigTitleCase.module.scss'
const BigTitleCase = () => {
  return (
    <section>
      <Container>
        <h2 className={classNames('h1', styles['title'])}>
          Explore
          <span>
            more <span>projects</span>
          </span>
        </h2>
      </Container>
    </section>
  )
}

export default BigTitleCase
