import React from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'

import styles from './AboutBigTitle.module.scss'

const AboutBigTitle = () => {
  return (
    <div className={styles['about-title']}>
      <Container>
        <h1 className={classNames(styles['title'], 'h1')}>
          <strong>Here&apos;s how</strong>
          <strong>we create</strong>
          <strong>
            our <span>best apps</span>
          </strong>
        </h1>
      </Container>
    </div>
  )
}

export default AboutBigTitle
