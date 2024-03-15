import React, { FC } from 'react'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'

import styles from './StickyBlock.module.scss'

type StickyBlockType = {
  className?: string
}
const StickyBlock: FC<StickyBlockType> = ({ className }) => {
  return (
    <div className={classNames(styles['sticky-block'], className)}>
      <ul className={styles['sticky-block__list']}>
        <li className={styles['sticky-block__list_link']}>Remote</li>
        <li className={styles['sticky-block__list_link']}>Full-time</li>
      </ul>
      <div className={styles['sticky-block__text']}>
        <p className={styles['sticky-block__text_title']}>About</p>
        <p className={styles['sticky-block__text_description']}>
          We are looking for a UX/UI Designer to work on the next generation of
          digital commerce, apps and sites combining brand, design and business.
        </p>
      </div>
      <div className={styles['sticky-block__text']}>
        <p className={styles['sticky-block__text_title']}>Salary</p>
        <p className={styles['sticky-block__text_description']}>$4000 - 5000</p>
      </div>
      <div className={styles['sticky-block__button']}>
        <ButtonPrimary
          className={styles['sticky-block__button_btn']}
          arrows={true}
          variant={'green'}
        >
          Apply
        </ButtonPrimary>
      </div>
    </div>
  )
}

export default StickyBlock
