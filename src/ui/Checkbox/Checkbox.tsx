import React, { FC } from 'react'

import styles from './Checkbox.module.scss'
import classNames from 'classnames'

type CheckboxType = {
  title: string
  error?: string
}

const Checkbox: FC<CheckboxType> = ({ title, error }) => {
  return (
    <label
      className={classNames(styles['checkbox'], error ? styles['__error'] : '')}
    >
      <input type="checkbox" value={title} />
      <span className={styles['checkbox__title']}>{title}</span>
    </label>
  )
}

export default Checkbox
