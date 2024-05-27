import React from 'react'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import Container from '@/app/layouts/Container'
import HeaderMobileNavigation from '@/components/HeaderMobile/ui/HeaderMobileNavigation/HeaderMobileNavigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import useDetectScroll from '@smakss/react-scroll-direction'
import { motion } from 'framer-motion'

import styles from './HeaderMobile.module.scss'

const headerVariants = {
  initial: {
    y: 0,
  },
  hidden: {
    y: '55rem',
  },
}
const HeaderMobile = () => {
  const { scrollDir, scrollPosition } = useDetectScroll({ thr: 10 })

  const headerAnimated = useSelector(
    (state: RootState) => state.isHeaderAnimated.isHeaderAnimated,
  )

  const shouldHiddenHeader =
    (scrollDir === 'down' && headerAnimated && scrollPosition.bottom > 0) ||
    scrollPosition.bottom <= 0

  return (
    <>
      <HeaderMobileNavigation />
      <motion.header
        variants={headerVariants}
        animate={shouldHiddenHeader ? 'hidden' : 'initial'}
        className={styles['header-mobile']}
      >
        <Container className={styles['header-mobile__container']}>
          <CallMenuButton>Menu</CallMenuButton>
        </Container>
      </motion.header>
    </>
  )
}

export default HeaderMobile
