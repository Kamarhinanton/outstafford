import React from 'react'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import Logo from '../../../../../public/icons/logo.svg'
import classNames from 'classnames'
import routes from '@/utils/routes'
import dynamic from 'next/dynamic'

import styles from './HeroSection.module.scss'

const HeroAnimation = dynamic(
  () => import('@/modules/Home/ui/HeroSection/Spot/Spot'),
  {
    ssr: false,
  },
)

const HeroSection = () => {
  return (
    <section className={styles['hero']}>
      <Container>
        <div className={styles['hero__content']}>
          <div className={styles['hero__content_top']}>
            <div className={styles['logo']}>
              <Logo />
            </div>
            <h4 className={classNames(styles['subtitle'], 'h4')}>
              Hey, we’re <span>Outstafford</span>
            </h4>
          </div>
          <div className={styles['hero__content_bottom']}>
            <h1 className={classNames(styles['title'], styles['desk'], 'h1')}>
              We <span>create</span>
              <br /> awesome mobile
              <br /> and web apps for <span>Startups</span>
            </h1>
            <h1 className={classNames(styles['title'], styles['mob'], 'h1')}>
              <strong>
                We <span>create</span>
                <br /> awesome
              </strong>
              <strong>
                mobile and
                <br />
                web apps for
                <br /> <span>Startups</span>
              </strong>
            </h1>
            <ButtonPrimary
              className={styles['button']}
              arrows={true}
              size={'large'}
              variant={'transparent'}
              href={routes.public.contact}
            >
              Contact us
            </ButtonPrimary>
          </div>
        </div>
        <HeroAnimation />
      </Container>
    </section>
  )
}

export default HeroSection
