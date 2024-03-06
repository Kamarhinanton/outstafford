import React from 'react'
import HeaderNavigation from '@/components/Header/ui/HeaderNavigation/HeaderNavigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import { socialLinksData } from '@/components/HeaderMobile/ui/HeaderMobileNavigation/data'
import useRouteChange from '@/hooks/useRoutChange'

import styles from './HeaderMobileNavigation.module.scss'

const headerVariant = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 50 },
  exit: { opacity: 0, y: 50 },
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
  },
}
const HeaderMobileNavigation = () => {
  useRouteChange()

  return (
    <motion.div
      {...headerVariant}
      className={styles['header-mobile-navigation']}
    >
      <div className={styles['header-mobile-navigation__container']}>
        <HeaderNavigation />
        <nav className={styles['header-mobile-navigation__container_social']}>
          {socialLinksData.map((social) => (
            <Link
              className={styles['link']}
              key={social.link}
              href={social.href}
            >
              <BackgroundImage src={social.src} alt={social.link} />
            </Link>
          ))}
        </nav>
      </div>
      <CallMenuButton
        className={styles['header-mobile-navigation__button']}
        cross
      >
        Back
      </CallMenuButton>
    </motion.div>
  )
}

export default HeaderMobileNavigation
