import React, { useEffect } from 'react'
import HeaderNavigation from '@/components/Header/ui/HeaderNavigation/HeaderNavigation'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import { socialLinksData } from '@/components/HeaderMobile/ui/HeaderMobileNavigation/data'
import useRouteChange from '@/hooks/useRoutChange'
import { setIsPopUpActive } from '@/store/reducers/callPopUpSlice'
import { AppDispatch, RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'

import styles from './HeaderMobileNavigation.module.scss'

const headerVariant = {
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  initial: { opacity: 0, y: 50 },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
}
const HeaderMobileNavigation = () => {
  const dispatch: AppDispatch = useDispatch()
  const isMenuActive = useSelector(
    (state: RootState) => state.callMenu.isMenuActive,
  )

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMenuActive])

  useRouteChange()

  useEffect(() => {
    dispatch(setIsPopUpActive(true))
    return () => {
      dispatch(setIsPopUpActive(false))
    }
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={headerVariant}
        initial="initial"
        animate={isMenuActive ? 'animate' : 'exit'}
        className={styles['header-mobile-navigation']}
        style={
          isMenuActive
            ? { pointerEvents: 'initial' }
            : { pointerEvents: 'none' }
        }
      >
        <div className={styles['header-mobile-navigation__container']}>
          <HeaderNavigation />
          <nav className={styles['header-mobile-navigation__container_social']}>
            {socialLinksData.map((social) => (
              <Link
                scroll={false}
                className={styles['link']}
                key={social.link}
                href={social.href}
              >
                <BackgroundImage src={social.src} alt={social.link} />
              </Link>
            ))}
          </nav>
        </div>
        <CallMenuButton
          className={styles['header-mobile-navigation__button']}
          cross
        >
          Back
        </CallMenuButton>
      </m.div>
    </LazyMotion>
  )
}

export default HeaderMobileNavigation
