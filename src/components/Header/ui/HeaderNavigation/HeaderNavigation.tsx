import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navigationHeaderLinks } from '@/components/Header/ui/HeaderNavigation/data'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import routes from '@/utils/routes'
import { useLenis } from '@studio-freight/react-lenis'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { setIsMenuActive } from '@/store/reducers/callMenuSlice'

import styles from './HeaderNavigation.module.scss'

const HeaderNavigation = () => {
  const router = useRouter()
  const [activeLink, setActiveLink] = useState('')
  const lenis = useLenis()
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    setActiveLink(router.asPath)
  }, [router.asPath])

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault()
    if (href === routes.public.about) {
      lenis?.scrollTo('top')
      setActiveLink(routes.public.about)
      dispatch(setIsMenuActive(false))
    }
    if (href === `${routes.public.about}?param=work`) {
      lenis?.scrollTo('#work')
      setActiveLink(`${routes.public.about}?param=work`)
      dispatch(setIsMenuActive(false))
    }
  }

  const shouldHandleAnchor = (routerPath: string, linkHref: string): boolean =>
    (routerPath === routes.public.about ||
      routerPath === `${routes.public.about}?param=work`) &&
    (linkHref === routes.public.about ||
      linkHref === `${routes.public.about}?param=work`)

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
          onClick={
            shouldHandleAnchor(router.asPath, link.href)
              ? (e) => handleAnchor(e, link.href)
              : undefined
          }
        >
          {link.description}
        </Link>
      ))}
    </nav>
  )
}

export default HeaderNavigation
