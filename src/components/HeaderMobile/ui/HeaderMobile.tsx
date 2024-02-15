import React, { useState } from 'react'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import Container from '@/app/layouts/Container'
import HeaderMobileNavigation from '@/components/HeaderMobile/ui/HeaderMobileNavigation/HeaderMobileNavigation'
import { AnimatePresence } from 'framer-motion'

import styles from './HeaderMobile.module.scss'
const HeaderMobile = () => {
  const [callMenu, setCallMenu] = useState(false)

  return (
    <>
      <header className={styles['header-mobile']}>
        <Container className={styles['header-mobile__container']}>
          <CallMenuButton setCallMenu={setCallMenu} callMenu={callMenu}>
            Menu
          </CallMenuButton>
        </Container>
      </header>
      <AnimatePresence>
        {callMenu && <HeaderMobileNavigation setCallMenu={setCallMenu} />}
      </AnimatePresence>
    </>
  )
}

export default HeaderMobile
