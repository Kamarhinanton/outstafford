import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'

import styles from './BigTitle.module.scss'
const BigTitle = () => {
  return (
    <section>
      <Container size={'small'}>
        <h2 className={classNames('h1', styles['title'])}>
          Read more <span>articles</span>
        </h2>
      </Container>
    </section>
  )
}

export default BigTitle
