import React from 'react'
import styles from './HeaderSubmenu.module.scss'
import Link from 'next/link'
import Image from 'next/image'

type CustomLink = {
  href: string
  src?: string
  link: string
}

type Submenu = {
  description: string
  links: CustomLink[]
}

type HeaderSubmenuData = Submenu[]

const headerSubmenuData: HeaderSubmenuData = [
  {
    description: 'Our work',
    links: [
      { link: 'Main', href: '/' },
      { link: 'About', href: '/' },
      { link: 'Projects', href: '/' },
    ],
  },
  {
    description: 'Get to know us',
    links: [
      { link: 'Our team', href: '/' },
      { link: 'How we work', href: '/' },
      { link: 'reviews', href: '/' },
      { link: 'Our blog', href: '/' },
      { link: 'Careers', href: '/' },
    ],
  },
  {
    description: 'Links',
    links: [
      { href: '/', src: '/icons/icon.png', link: 'Upwork' },
      { href: '/', src: '/icons/icon.png', link: 'Clutch' },
      { href: '/', src: '/icons/icon.png', link: 'G2' },
    ],
  },
  {
    description: 'Find us on social media',
    links: [
      { href: '/', src: '/icons/icon.png', link: 'Dribbble' },
      { href: '/', src: '/icons/icon.png', link: 'Behance' },
      { href: '/', src: '/icons/icon.png', link: 'Instagram' },
    ],
  },
]

const HeaderSubmenu = () => {
  return (
    <ul className={styles['header-submenu']}>
      {headerSubmenuData.map((column) => (
        <li
          className={styles['header-submenu__column']}
          key={column.description}
        >
          <p className={styles['title']}>{column.description}</p>
          <ul className={styles['list']}>
            {column.links.map((row) => (
              <li className={styles['list__item']} key={row.link}>
                {row.src && (
                  <div className={styles['list__item_icon']}>
                    <Image
                      className={styles['img']}
                      fill={true}
                      src={row.src}
                      alt={row.link}
                    />
                  </div>
                )}
                <Link href={row.href}>{row.link}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default HeaderSubmenu
