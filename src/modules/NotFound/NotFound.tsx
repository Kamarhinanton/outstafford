import React from 'react'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import routes from '@/utils/routes'
import classNames from 'classnames'

import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <section className={styles['not-found']}>
      <Container>
        <div className={styles['not-found__content']}>
          <h1 className={styles['title']}>404</h1>
          <h2 className={classNames(styles['description'], 'h2')}>
            Page not found
          </h2>
          <ButtonPrimary
            href={routes.public.index}
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
