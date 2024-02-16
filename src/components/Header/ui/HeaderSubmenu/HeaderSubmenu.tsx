import React from 'react'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { headerSubmenuData } from '@/components/Header/ui/HeaderSubmenu/data'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

import styles from './HeaderSubmenu.module.scss'

const HeaderSubmenu = () => {
  const callMenu = useSelector((state: RootState) => state.callMenu.callMenu)
  const mods = {
    [styles['active']]: callMenu,
  }

  return (
    <div className={classNames(styles['header-submenu'], mods)}>
      <ul className={styles['header-submenu__wrapper']}>
        {headerSubmenuData.map((column) => (
          <li
            className={styles['header-submenu__wrapper_column']}
            key={column.description}
          >
            <p className={styles['title']}>{column.description}</p>
            <ul className={styles['list']}>
              {column.links.map((row) => (
                <li className={styles['list__item']} key={row.link}>
                  <Link className={styles['list__item_link']} href={row.href}>
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
