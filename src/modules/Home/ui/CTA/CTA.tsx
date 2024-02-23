import React from 'react'

import styles from './CTA.module.scss'
import classNames from 'classnames'

const Cta = () => {
  return (
    <section className={styles['cta']}>
      <div className={styles['cta__content']}>
        <h2 className={classNames(styles['title'], 'h2')}>Let’s talk!</h2>
        <p className={styles['description']}>
          Feel free to choose a time that works best for you, and we&apos;ll
          have a chat about your idea
        </p>
      </div>
    </section>
  )
}

export default Cta
