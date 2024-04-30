import React from 'react'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import HeaderNavigation from '@/components/Header/ui/HeaderNavigation/HeaderNavigation'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import HeaderSubmenu from '@/components/Header/ui/HeaderSubmenu/HeaderSubmenu'
import routes from '@/utils/routes'
import useRouteChange from '@/hooks/useRoutChange'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import classNames from 'classnames'
import useScrollDirection from '@/hooks/useScrollDirection'

import styles from './Header.module.scss'
const Header = () => {
  useRouteChange()
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
    <header className={classNames(styles['header'], headerClass)}>
      <div className={styles['header__container']}>
        <div className={styles['header__container_content']}>
          <CallMenuButton />
          <HeaderNavigation />
          <ButtonPrimary href={routes.public.contact}>Contact us</ButtonPrimary>
        </div>
        <HeaderSubmenu />
      </div>
    </header>
  )
}

export default Header
