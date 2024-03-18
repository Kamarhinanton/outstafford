import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './CloseCross.module.scss'

type CloseCross = {
  className?: string
  callBackFunc?: () => void
}

const CloseCross: FC<CloseCross> = ({ className, callBackFunc }) => {
  return (
    <div
      onClick={callBackFunc}
      className={classNames(styles['cross'], className)}
    >
      <span></span>
      <span></span>
    </div>
  )
}

export default CloseCross
