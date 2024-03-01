import React from 'react'
import Link from 'next/link'
import routes from '@/utils/routes'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import Logo from '../../../public/icons/logo.svg'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import styles from './HeaderMobileCTA.module.scss'

const HeaderMobileCta = () => {
  const router = useRouter()
  const isContactPage = router.pathname === routes.public.contact

  return (
    <section
      className={classNames(
        styles['header-mobile-cta'],
        isContactPage ? styles['no-button'] : '',
      )}
    >
      <Container>
        <div className={styles['header-mobile-cta__content']}>
          <Link
            className={styles['header-mobile-cta__content_logo']}
            href={routes.public.index}
          >
            <Logo />
          </Link>
          {!isContactPage && (
            <ButtonPrimary href={routes.public.contact} variant={'green'}>
              Contact us
            </ButtonPrimary>
          )}
        </div>
      </Container>
    </section>
  )
}

export default HeaderMobileCta
