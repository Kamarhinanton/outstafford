import React, { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import classNames from 'classnames'
import { ControllerRenderProps } from 'react-hook-form'

import styles from './Checkbox.module.scss'

type CheckboxType = {
  title: string
  error?: string
  onChange: (e: string[]) => void
  field?: ControllerRenderProps
  value?: string
  watchedCheckboxGroup?: string[]
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxType>(
  (
    {
      title,
      watchedCheckboxGroup,
      error,
      onChange,
      field,
      value,
    }: CheckboxType,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const handleChange = (value: ChangeEvent<HTMLInputElement>) => {
      if (watchedCheckboxGroup) {
        const newArray = [...watchedCheckboxGroup]
        const item = value.target?.value

        if (newArray.includes(item)) {
          newArray.splice(newArray.indexOf(item), 1)
        } else {
          newArray.push(item)
        }
        onChange(newArray)
      }
    }

    return (
      <label
        className={classNames(
          styles['checkbox'],
          error ? styles['__error'] : '',
        )}
      >
        <input
          value={value}
          onChange={handleChange}
          ref={ref}
          type="checkbox"
          {...field}
        />
        <span className={styles['checkbox__title']}>{title}</span>
      </label>
    )
  },
)

export default Checkbox
