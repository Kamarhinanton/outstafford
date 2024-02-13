import React from 'react'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import HeaderNavigation from '@/components/Header/ui/HeaderNavigation/HeaderNavigation'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__container']}>
        <div className={styles['header__container_content']}>
          <CallMenuButton />
          <HeaderNavigation />
          <ButtonPrimary>Contact us</ButtonPrimary>
        </div>
      </div>
    </header>
  )
}

export default Header
