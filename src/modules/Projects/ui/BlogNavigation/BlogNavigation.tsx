import React from 'react'

import styles from './BlogNavigation.module.scss'

const BlogNavigation = () => {
  return (
    <div className={styles['blog-navigation']}>
      <ul className={styles['blog-navigation__list']}>
        <li className={styles['item']}>
          <p className={styles['item__text']}>All</p>
        </li>
        <li className={styles['item']}>
          <p className={styles['item__text']}>Mobile</p>
        </li>
        <li className={styles['item']}>
          <p className={styles['item__text']}>Web</p>
        </li>
        <li className={styles['item']}>
          <p className={styles['item__text']}>AI</p>
        </li>
      </ul>
    </div>
  )
}

export default BlogNavigation
