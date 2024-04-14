import React, { useCallback, useEffect, useState } from 'react'
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
  const [isAnimate, setIsAnimate] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (
      router.pathname === routes.public.contact ||
      router.route === '/404' ||
      router.route === routes.public.privacy ||
      router.route === routes.public.terms ||
      router.route === routes.public.cookies
    ) {
      timeoutId = setTimeout(() => {
        setIsAnimate(true)
      }, 2000)
    } else {
      timeoutId = setTimeout(() => {
        setIsAnimate(false)
      }, 2000)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [router])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const mods = {
    [styles['no-button']]: isAnimate,
    [styles['scrolled']]: scrolled,
  }

  return (
    <section className={classNames(styles['header-mobile-cta'], mods)}>
      <Container>
        <div className={styles['header-mobile-cta__content']}>
          <Link
            scroll={false}
            className={styles['header-mobile-cta__content_logo']}
            href={routes.public.index}
          >
            <Logo />
          </Link>
          {!isAnimate && (
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
