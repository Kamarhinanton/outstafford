import React from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import Link from 'next/link'
import CardTransformPerspective from '@/components/CardTransformPerspective/CardTransformPerspective'

import styles from './CTA.module.scss'

const Cta = () => {
  return (
    <section className={styles['cta']}>
      <Container className={styles['container']}>
        <CardTransformPerspective className={styles['cta__wrapper']}>
          <div className={styles['cta__wrapper_content']}>
            <h2 className={classNames(styles['title'], styles['desk'], 'h2')}>
              Get your detailed estimate today
            </h2>
            <Link
              scroll={false}
              href={'/'}
              className={classNames(styles['title'], styles['mob'], 'h2')}
            >
              Book a meeting
            </Link>
            <p className={styles['description']}>
              Shoot us a message and we’ll reply within 8 hours
            </p>
            <ButtonPrimary
              className={styles['button']}
              size={'large'}
              variant={'green'}
            >
              Contact us
            </ButtonPrimary>
          </div>
        </CardTransformPerspective>
      </Container>
    </section>
  )
}

export default Cta
