import React from 'react'
import Link from 'next/link'
import routes from '@/utils/routes'

import styles from './HeaderNavigation.module.scss'

const navigationHeaderLinks = [
  {
    href: routes.public.about,
    description: 'About',
  },
  {
    href: routes.public.projects,
    description: 'Projects',
  },
  {
    href: routes.public.work,
    description: 'How We Work',
  },
  {
    href: routes.public.blog,
    description: 'Our Blog',
  },
]

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
