import React from 'react'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { headerSubmenuData } from '@/components/Header/ui/HeaderSubmenu/data'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { setIsMenuActive } from '@/store/reducers/callMenuSlice'

import styles from './HeaderSubmenu.module.scss'

const HeaderSubmenu = () => {
  const isMenuActive = useSelector(
    (state: RootState) => state.callMenu.isMenuActive,
  )
  const mods = {
    [styles['active']]: isMenuActive,
  }
  const dispatch: AppDispatch = useDispatch()

  const mouseLeaveDetect = ({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { top, left, right } = currentTarget.getBoundingClientRect()

    if (clientY < top || clientX < left || clientX > right) {
      dispatch(setIsMenuActive(false))
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      dispatch(setIsMenuActive(false))
    }
  }

  return (
    <div className={classNames(styles['header-submenu'], mods)}>
      <ul className={styles['header-submenu__wrapper']}>
        <div
          className={styles['close-area']}
          onMouseLeave={mouseLeaveDetect}
          onClick={handleClick}
        />
        {headerSubmenuData.map((column) => (
          <li
            className={styles['header-submenu__wrapper_column']}
            key={column.description}
          >
            <p className={styles['title']}>{column.description}</p>
            <ul className={styles['list']}>
              {column.links.map((row) => (
                <li className={styles['list__item']} key={row.link}>
                  <Link
                    scroll={false}
                    className={styles['list__item_link']}
                    href={row.href}
                    target={
                      row.link === 'Book a meeting' ||
                      row.link === 'Upwork' ||
                      row.link === 'LinkedIn'
                        ? '_blank'
                        : undefined
                    }
                  >
                    {row.src && (
                      <BackgroundImage
                        className={styles['icon']}
                        src={row.src}
                        alt={row.link}
                      />
                    )}
                    <span className={styles['text']}>{row.link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderSubmenu
