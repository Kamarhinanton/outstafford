import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './ButtonPrimary.module.scss'

type ButtonPrimaryVariants = 'grey' | 'green' | 'dark-green' | 'transparent'
type ButtonPrimarySizes = 'normal' | 'large'

type ButtonPrimaryProps = {
  isLoading?: boolean
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
  isLoading = false,
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
    [styles['__loading']]: isLoading,
  }

  return (
    <>
      {!href ? (
        <button
          className={classNames(styles['buttonPrimary'], className, mods)}
          {...buttonProps}
        >
          {isLoading ? 'Loading...' : children}
        </button>
      ) : (
        <Link
          scroll={false}
          className={classNames(styles['buttonPrimary'], className, mods)}
          href={href}
        >
          {isLoading ? 'Loading...' : children}
        </Link>
      )}
    </>
  )
}

export default ButtonPrimary
