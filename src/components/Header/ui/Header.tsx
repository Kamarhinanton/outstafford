import React, { useState } from 'react'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import HeaderNavigation from '@/components/Header/ui/HeaderNavigation/HeaderNavigation'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import HeaderSubmenu from '@/components/Header/ui/HeaderSubmenu/HeaderSubmenu'

import styles from './Header.module.scss'
import { AnimatePresence } from 'framer-motion'

const Header = () => {
  const [callMenu, setCallMenu] = useState(false)

  return (
    <>
      <header className={styles['header']}>
        <div className={styles['header__container']}>
          <div className={styles['header__container_content']}>
            <CallMenuButton setCallMenu={setCallMenu} callMenu={callMenu} />
            <HeaderNavigation />
            <ButtonPrimary>Contact us</ButtonPrimary>
          </div>
        </div>
        <AnimatePresence>{callMenu && <HeaderSubmenu />}</AnimatePresence>
      </header>
    </>
  )
}

export default Header
