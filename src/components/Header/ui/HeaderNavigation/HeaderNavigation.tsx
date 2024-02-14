import React from 'react'
import Link from 'next/link'
import { navigationHeaderLinks } from '@/components/Header/ui/HeaderNavigation/data'

import styles from './HeaderNavigation.module.scss'

const HeaderNavigation = () => {
  return (
    <nav className={styles['header-navigation']}>
      {navigationHeaderLinks.map((link) => (
        <Link
          className={styles['header-navigation__link']}
          key={link.description}
          href={link.href}
        >
          {link.description}
        </Link>
      ))}
    </nav>
  )
}

export default HeaderNavigation
