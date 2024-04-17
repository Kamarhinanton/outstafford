import React from 'react'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import Container from '@/app/layouts/Container'
import HeaderMobileNavigation from '@/components/HeaderMobile/ui/HeaderMobileNavigation/HeaderMobileNavigation'

import styles from './HeaderMobile.module.scss'
const HeaderMobile = () => {
  return (
    <>
      <header className={styles['header-mobile']}>
        <Container className={styles['header-mobile__container']}>
          <CallMenuButton>Menu</CallMenuButton>
          <HeaderMobileNavigation />
        </Container>
      </header>
    </>
  )
}

export default HeaderMobile
