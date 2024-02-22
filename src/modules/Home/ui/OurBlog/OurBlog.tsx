import React from 'react'
import classNames from 'classnames'

import styles from './OurBlog.module.scss'
const OurBlog = () => {
  return (
    <section className={styles['our-blog']}>
      <h3 className={classNames(styles['title'], 'h3')}>Our blog</h3>
    </section>
  )
}

export default OurBlog
