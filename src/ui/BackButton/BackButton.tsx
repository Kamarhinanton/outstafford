import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './BackButton.module.scss'

type BackButtonType = {
  className?: string
  callBackFunc?: () => void
}

const BackButton: FC<BackButtonType> = ({ className, callBackFunc }) => {
  return (
    <button
      onClick={callBackFunc}
      className={classNames(className, styles['back-button'])}
    >
      Back
    </button>
  )
}

export default BackButton
