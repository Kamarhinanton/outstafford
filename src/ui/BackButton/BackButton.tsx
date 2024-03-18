import React, { FC } from 'react'

import styles from './BackButton.module.scss'
import classNames from 'classnames'

type BackButtonType = {
  className?: string
  callBackFunc?: () => void
}

const BackButton: FC<BackButtonType> = ({ className, callBackFunc }) => {
  return (
    <div
      onClick={callBackFunc}
      className={classNames(className, styles['back-button'])}
    >
      Back
    </div>
  )
}

export default BackButton
