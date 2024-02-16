import React from 'react'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import HeaderNavigation from '@/components/Header/ui/HeaderNavigation/HeaderNavigation'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import HeaderSubmenu from '@/components/Header/ui/HeaderSubmenu/HeaderSubmenu'
import routes from '@/utils/routes'
import useRouteChange from '@/hooks/useRoutChange'

import styles from './Header.module.scss'
const Header = () => {
  useRouteChange()

  return (
    <>
      <header className={styles['header']}>
        <div className={styles['header__container']}>
          <div className={styles['header__container_content']}>
            <CallMenuButton />
            <HeaderNavigation />
            <ButtonPrimary href={routes.public.contact}>
              Contact us
            </ButtonPrimary>
          </div>
          <HeaderSubmenu />
        </div>
      </header>
    </>
  )
}

export default Header
