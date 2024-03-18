import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './BackButton.module.scss'
import Link from 'next/link'
import routes from '@/utils/routes'

type BackButtonType = {
  className?: string
  callBackFunc?: () => void
}

const BackButton: FC<BackButtonType> = ({ className, callBackFunc }) => {
  return (
    <Link
      href={routes.public.careers}
      scroll={false}
      // onClick={callBackFunc}
      className={classNames(className, styles['back-button'])}
    >
      Back
    </Link>
  )
}

export default BackButton
