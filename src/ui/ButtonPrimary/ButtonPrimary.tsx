import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './ButtonPrimary.module.scss'

type ButtonPrimaryVariants = 'grey' | 'green' | 'transparent'

type ButtonPrimaryProps = {
  // isLoading?: boolean
  href?: string
  // arrows?: boolean
  className?: string
  variant?: ButtonPrimaryVariants
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  // isLoading,
  href = '/',
  // arrows,
  className,
  children,
  variant = 'grey',
}) => {
  const mods = {
    [styles[variant]]: true,
  }

  return (
    <Link
      className={classNames(styles['buttonPrimary'], className, mods)}
      href={href}
    >
      {children}
    </Link>
  )
}

export default ButtonPrimary
