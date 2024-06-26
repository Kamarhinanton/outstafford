import React from 'react'
import CallMenuButton from '@/components/Header/ui/CallMenuButton/CallMenuButton'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import HeaderSubmenu from '@/components/Header/ui/HeaderSubmenu/HeaderSubmenu'
import routes from '@/utils/routes'
import useRouteChange from '@/hooks/useRoutChange'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import classNames from 'classnames'
import useDetectScroll from '@smakss/react-scroll-direction'
import dynamic from 'next/dynamic'
const HeaderNavigation = dynamic(
  () => import('@/components/Header/ui/HeaderNavigation/HeaderNavigation'),
  {
    ssr: false,
  },
)
import styles from './Header.module.scss'
const Header = () => {
  useRouteChange()
  const { scrollDir } = useDetectScroll({ thr: 10 })

  const headerAnimated = useSelector(
    (state: RootState) => state.isHeaderAnimated.isHeaderAnimated,
  )

  const isHomeFooterVisible = useSelector(
    (state: RootState) => state.detectSliderPosition.isBottom,
  )

  const headerClass = {
    [styles['hidden']]:
      (scrollDir === 'down' && headerAnimated) || isHomeFooterVisible,
  }

  return (
    <header className={classNames(styles['header'], headerClass)}>
      <div className={styles['header__container']}>
        <div className={styles['header__container_content']}>
          <CallMenuButton />
          <HeaderNavigation />
          <ButtonPrimary href={routes.public.contact}>Contact us</ButtonPrimary>
        </div>
        <HeaderSubmenu />
      </div>
    </header>
  )
}

export default Header
