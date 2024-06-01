import React, { useEffect } from 'react'
import Link from 'next/link'
import { navigationHeaderLinks } from '@/components/Header/ui/HeaderNavigation/data'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import useLenisAnchor, { shouldHandleAnchor } from '@/hooks/useLenisAnchor'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { setActiveLink } from '@/store/reducers/activeLinkSlice'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'

import styles from './HeaderNavigation.module.scss'
const HeaderNavigation = () => {
  const { width } = useWindowDimensions()
  const router = useRouter()
  const activeLink = useSelector(
    (state: RootState) => state.activeLink.activeLink,
  )
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(setActiveLink(router.asPath))
  }, [router.asPath])

  const { handleAnchor } = useLenisAnchor()

  return (
    <nav className={styles['header-navigation']}>
      {navigationHeaderLinks
        .filter((link) => (width > breakpointMob ? link.desktop : true))
        .map((link) => (
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
