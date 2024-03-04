import React, { FC } from 'react'
import ErrorIcon from '../../../public/icons/error.svg'
import classNames from 'classnames'

import styles from './ErrorMessage.module.scss'

type ErrorMessageType = {
  error?: string
  className?: string
}
const ErrorMessage: FC<ErrorMessageType> = ({ error, className }) => {
  return (
    <p className={classNames(styles['error-message'], className)}>
      <ErrorIcon className={styles['error-message__icon']} />
      <span className={styles['error-message__text']}>{error}</span>
    </p>
  )
}

export default ErrorMessage
