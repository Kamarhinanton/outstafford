import React from 'react'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { headerSubmenuData } from '@/components/Header/ui/HeaderSubmenu/data'
import { motion } from 'framer-motion'

import styles from './HeaderSubmenu.module.scss'

const headerVariant = {
  animate: { opacity: 1, bottom: '148rem' },
  initial: { opacity: 0, bottom: '136rem' },
  exit: { opacity: 0, bottom: '136rem' },
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
  },
}
const HeaderSubmenu = () => {
  return (
    <motion.ul {...headerVariant} className={styles['header-submenu']}>
      {headerSubmenuData.map((column) => (
        <li
          className={styles['header-submenu__column']}
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
    </motion.ul>
  )
}

export default HeaderSubmenu
