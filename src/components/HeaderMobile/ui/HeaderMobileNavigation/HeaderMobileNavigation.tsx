import React, { FC, useEffect } from 'react'
import HeaderNavigation from '@/components/Header/ui/HeaderNavigation/HeaderNavigation'
import { headerSubmenuData } from '@/components/Header/ui/HeaderSubmenu/data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'

import styles from './HeaderMobileNavigation.module.scss'
import { router } from 'next/client'

type HeaderMobileNavigation = {
  setCallMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const headerVariant = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 50 },
  exit: { opacity: 0, y: 50 },
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
  },
}
const HeaderMobileNavigation: FC<HeaderMobileNavigation> = ({
  setCallMenu,
}) => {
  const socialLinks = headerSubmenuData
    .flatMap((group) => group.links)
    .filter((link) => link.src && link.href)

  useEffect(() => {
    const handleRouteChange = () => {
      setCallMenu((prev) => !prev)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])

  return (
    <motion.div
      {...headerVariant}
      className={styles['header-mobile-navigation']}
    >
      <div className={styles['header-mobile-navigation__container']}>
        <HeaderNavigation />
        <nav className={styles['header-mobile-navigation__container_social']}>
          {socialLinks.map((social) => (
            <Link
              className={styles['link']}
              key={social.src}
              href={social.href}
            >
              {social.src && (
                <BackgroundImage
                  className={styles['link__icon']}
                  src={social.src}
                  alt={'social'}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
      <CallMenuButton
        setCallMenu={setCallMenu}
        className={styles['header-mobile-navigation__button']}
        cross
      >
        Back
      </CallMenuButton>
    </motion.div>
  )
}

export default HeaderMobileNavigation
