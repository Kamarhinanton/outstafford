import React from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import routes from '@/utils/routes'
import dynamic from 'next/dynamic'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'

const CardTransform = dynamic(
  () => import('@/ui/CardTransformPerspective/CardTransformPerspective'),
  {
    ssr: false,
  },
)

const Robot = dynamic(() => import('@/components/CTA/Robot/Robot'), {
  ssr: false,
})

import styles from './CTA.module.scss'

const Cta = () => {
  const { width } = useWindowDimensions()

  return (
    <section className={classNames(styles['cta'], 'hover-cursor')}>
      <Container className={styles['container']}>
        {width > breakpointMob && <Robot />}
        <CardTransform className={styles['cta__wrapper']}>
          <div className={styles['cta__wrapper_content']}>
            <h2 className={classNames(styles['title'], 'h2')}>
              Get your detailed estimate today
            </h2>
            <p className={styles['description']}>
              Shoot us a message and we’ll reply within 4 hours
            </p>
            <ButtonPrimary
              className={classNames(styles['button'], 'no-hover-cursor')}
              size={'large'}
              variant={'green'}
              href={routes.public.contact}
            >
              Contact us
            </ButtonPrimary>
          </div>
        </CardTransform>
      </Container>
    </section>
  )
}

export default Cta
