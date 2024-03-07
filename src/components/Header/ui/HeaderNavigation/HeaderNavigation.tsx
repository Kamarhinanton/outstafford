import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navigationHeaderLinks } from '@/components/Header/ui/HeaderNavigation/data'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import styles from './HeaderNavigation.module.scss'

const HeaderNavigation = () => {
  const router = useRouter()
  const [activeLink, setActiveLink] = useState('')
  useEffect(() => {
    setActiveLink(router.asPath)
  }, [router.asPath])
  return (
    <nav className={styles['header-navigation']}>
      {navigationHeaderLinks.map((link) => (
        <Link
          scroll={false}
          className={classNames(styles['header-navigation__link'], {
            [styles['active']]: link.href === activeLink,
          })}
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
