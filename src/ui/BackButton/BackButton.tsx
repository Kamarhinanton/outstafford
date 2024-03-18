import React, { FC } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import routes from '@/utils/routes'
import styles from './BackButton.module.scss'

type BackButtonType = {
  className?: string
  callBackFunc?: () => void
}

const BackButton: FC<BackButtonType> = ({ className }) => {
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
