import React from 'react'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import Container from '@/app/layouts/Container'
import HeaderMobileNavigation from '@/components/HeaderMobile/ui/HeaderMobileNavigation/HeaderMobileNavigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import classNames from 'classnames'
import useDetectScroll from '@smakss/react-scroll-direction'

import styles from './HeaderMobile.module.scss'

const HeaderMobile = () => {
  const { scrollDir, scrollPosition } = useDetectScroll({ thr: 10 })

  const headerAnimated = useSelector(
    (state: RootState) => state.isHeaderAnimated.isHeaderAnimated,
  )

  const headerClass = {
    [styles['hidden']]:
      (scrollDir === 'down' && headerAnimated && scrollPosition.bottom > 0) ||
      scrollPosition.bottom <= 0,
  }

  return (
    <header className={classNames(styles['header-mobile'], headerClass)}>
      <Container className={styles['header-mobile__container']}>
        <CallMenuButton>Menu</CallMenuButton>
        <HeaderMobileNavigation />
      </Container>
    </header>
  )
}

export default HeaderMobile
