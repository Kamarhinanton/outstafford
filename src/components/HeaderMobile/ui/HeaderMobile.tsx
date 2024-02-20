import React, { useEffect } from 'react'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import Container from '@/app/layouts/Container'
import HeaderMobileNavigation from '@/components/HeaderMobile/ui/HeaderMobileNavigation/HeaderMobileNavigation'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

import styles from './HeaderMobile.module.scss'
const HeaderMobile = () => {
  const isMenuActive = useSelector(
    (state: RootState) => state.callMenu.isMenuActive,
  )

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuActive])

  return (
    <>
      <header className={styles['header-mobile']}>
        <Container className={styles['header-mobile__container']}>
          <CallMenuButton>Menu</CallMenuButton>
          <AnimatePresence>
            {isMenuActive && <HeaderMobileNavigation />}
          </AnimatePresence>
        </Container>
      </header>
    </>
  )
}

export default HeaderMobile
