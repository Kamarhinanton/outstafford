import React, { FC, ReactNode } from 'react'

type SectionFullPageType = {
  children: ReactNode
}

import styles from './SectionFullPage.module.scss'

const SectionFullPage: FC<SectionFullPageType> = ({ children }) => {
  return (
    <div className={styles['full-page']}>
      <div className={styles['full-page__content']}>{children}</div>
    </div>
  )
}

export default SectionFullPage
