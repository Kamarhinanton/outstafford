import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './ButtonPrimary.module.scss'

type ButtonPrimaryVariants = 'grey' | 'green' | 'transparent'
type ButtonPrimarySizes = 'normal' | 'large'

type ButtonPrimaryProps = {
  // isLoading?: boolean
  href?: string
  arrows?: boolean
  className?: string
  variant?: ButtonPrimaryVariants
  size?: ButtonPrimarySizes
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  // isLoading,
  href,
  arrows = false,
  className,
  children,
  variant = 'grey',
  size = 'normal',
  ...buttonProps
}) => {
  const mods = {
    [styles[variant]]: true,
    [styles[size]]: true,
    [styles['arrows']]: arrows,
  }

  return (
    <>
      {!href ? (
        <button
          className={classNames(styles['buttonPrimary'], className, mods)}
          {...buttonProps}
        >
          {children}
        </button>
      ) : (
        <Link
          className={classNames(styles['buttonPrimary'], className, mods)}
          href={href}
        >
          {children}
        </Link>
      )}
    </>
  )
}

export default ButtonPrimary
