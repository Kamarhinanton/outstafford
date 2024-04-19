import React, { FC } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import styles from './BackButtonVariant.module.scss'

type BackButtonVariantType = {
  className?: string
  absolute?: boolean
}

const BackButtonVariant: FC<BackButtonVariantType> = ({
  className,
  absolute = false,
}) => {
  const router = useRouter()

  const mods = {
    [styles['position']]: absolute,
  }

  return (
    <button
      onClick={() => router.back()}
      className={classNames(styles['backward-button'], className, mods)}
    />
  )
}

export default BackButtonVariant
