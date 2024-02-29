import React from 'react'
import ErrorIcon from '../../../public/icons/error.svg'

import styles from './TextField.module.scss'
import classNames from 'classnames'

type TextFieldType = {
  type?: 'text' | 'email'
  element?: 'input' | 'textarea'
  label?: string
  error?: string
  name: string
  placeholder?: string
  className?: string
}

const TextField = ({
  type = 'text',
  element = 'input',
  label,
  error,
  name,
  placeholder,
  className,
}: TextFieldType) => {
  return (
    <label
      className={classNames(
        styles['text-field'],
        error ? styles['__error'] : '',
        className,
      )}
    >
      {element === 'textarea' ? (
        <textarea
          className={classNames(
            styles['text-field__input'],
            styles['textarea'],
          )}
          name={name}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={styles['text-field__input']}
          placeholder={placeholder}
          name={name}
          type={type}
        />
      )}

      {label && <p className={styles['text-field__label']}>{label}</p>}
      {error && (
        <p className={styles['text-field__error']}>
          <ErrorIcon className={styles['text-field__error_icon']} />
          <span className={styles['text-field__error_text']}>{error}</span>
        </p>
      )}
    </label>
  )
}

export default TextField
