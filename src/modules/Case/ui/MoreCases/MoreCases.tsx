import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'

import styles from './MoreCases.module.scss'

const MoreCases = () => {
  return (
    <section className={styles['more-cases']}>
      <Container>
        <div className={styles['more-cases__content']}>
          <h3 className={classNames('h3', styles['title'])}>
            See more case studies and UI concepts on Dribbble
          </h3>
          <ButtonPrimary className={styles['button']} variant={'green'}>
            Open Dribbble
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}

export default MoreCases
