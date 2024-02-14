import React from 'react'
import Link from 'next/link'
import routes from '@/utils/routes'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import styles from './HeaderMobileCTA.module.scss'

const HeaderMobileCta = () => {
  return (
    <section className={styles['header-mobile-cta']}>
      <Container>
        <div className={styles['header-mobile-cta__content']}>
          <Link href={routes.public.index}>
            <BackgroundImage
              className={styles['header-mobile-cta__content_logo']}
              src={'/icons/logo.svg'}
              alt={'logo'}
              contain
            />
          </Link>
          <ButtonPrimary href={routes.public.contact} variant={'green'}>
            Contact us
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}

export default HeaderMobileCta
