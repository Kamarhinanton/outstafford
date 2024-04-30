import React from 'react'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import Container from '@/app/layouts/Container'
import HeaderMobileNavigation from '@/components/HeaderMobile/ui/HeaderMobileNavigation/HeaderMobileNavigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import classNames from 'classnames'
import useScrollDirection from '@/hooks/useScrollDirection'

import styles from './HeaderMobile.module.scss'
const HeaderMobile = () => {
  useScrollDirection()
  const scrollDirection = useSelector(
    (state: RootState) => state.scrollDirection.scrollDirection,
  )
  const isFooterVisible = useSelector(
    (state: RootState) => state.footerVisibility.isFooterVisible,
  )
  const headerClass = {
    [styles['hidden']]: isFooterVisible || scrollDirection === 'down',
  }
  return (
    <>
      <header className={classNames(styles['header-mobile'], headerClass)}>
        <Container className={styles['header-mobile__container']}>
          <CallMenuButton>Menu</CallMenuButton>
          <HeaderMobileNavigation />
        </Container>
      </header>
    </>
  )
}

export default HeaderMobile
