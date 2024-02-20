import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setIsMenuActive } from '@/store/reducers/callMenuSlice'
import { RootState } from '@/store/store'

import styles from './CallMenuButton.module.scss'

type CallMenuButtonProps = {
  children?: ReactNode
  className?: string
  cross?: boolean
}

const CallMenuButton: FC<CallMenuButtonProps> = ({
  children,
  className,
  cross = false,
}) => {
  const isMenuActive = useSelector(
    (state: RootState) => state.callMenu.isMenuActive,
  ) as boolean
  const dispatch = useDispatch()

  const handleCallMenu = () => {
    if (isMenuActive) {
      dispatch(setIsMenuActive(false))
    } else if (!isMenuActive) {
      dispatch(setIsMenuActive(true))
    }
  }

  const mods = {
    [styles.open]: isMenuActive,
    [styles.cross]: cross,
  }

  return (
    <button
      onClick={handleCallMenu}
      className={classNames(styles['call-menu-button'], mods, className)}
    >
      {children}
      <div className={styles['call-menu-button__wrapper']}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  )
}

export default CallMenuButton
