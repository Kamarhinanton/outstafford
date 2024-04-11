import React from 'react'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import styles from './NotFound.module.scss'

const NotFound = () => {
  const router = useRouter()

  return (
    <section className={styles['not-found']}>
      <Container>
        <div className={styles['not-found__content']}>
          <h1 className={styles['title']}>404</h1>
          <h2 className={classNames(styles['description'], 'h2')}>
            Page not found
          </h2>
          <ButtonPrimary
            onClick={() => router.back()}
            variant={'green'}
            size={'large'}
          >
            Back to home
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}

export default NotFound
