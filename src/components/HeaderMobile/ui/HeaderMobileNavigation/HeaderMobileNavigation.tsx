import React, { FC } from 'react'
import HeaderNavigation from '@/components/Header/ui/HeaderNavigation/HeaderNavigation'
import { headerSubmenuData } from '@/components/Header/ui/HeaderSubmenu/data'

import styles from './HeaderMobileNavigation.module.scss'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'

type HeaderMobilenavigation = {
  setCallMenu: React.Dispatch<React.SetStateAction<boolean>>
}
const HeaderMobileNavigation: FC<HeaderMobilenavigation> = ({
  setCallMenu,
}) => {
  const socialLinks = headerSubmenuData
    .flatMap((group) => group.links)
    .filter((link) => link.src && link.href)

  return (
    <div className={styles['header-mobile-navigation']}>
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
      >
        Back
      </CallMenuButton>
    </div>
  )
}

export default HeaderMobileNavigation
