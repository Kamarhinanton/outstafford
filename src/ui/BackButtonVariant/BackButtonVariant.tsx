import React, { FC } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import styles from './BackButtonVariant.module.scss'

type BackButtonVariantType = {
  className?: string
}

const BackButtonVariant: FC<BackButtonVariantType> = ({ className }) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className={classNames(styles['backward-button'], className)}
    />
  )
}

export default BackButtonVariant
