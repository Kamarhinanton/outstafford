import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setCallMenu } from '@/store/reducers/callMenuSlice'
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
  const callMenu = useSelector(
    (state: RootState) => state.callMenu.callMenu,
  ) as boolean
  const dispatch = useDispatch()

  const handleCallMenu = () => {
    if (callMenu) {
      dispatch(setCallMenu(false))
    } else if (!callMenu) {
      dispatch(setCallMenu(true))
    }
  }

  const mods = {
    [styles.open]: callMenu,
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
