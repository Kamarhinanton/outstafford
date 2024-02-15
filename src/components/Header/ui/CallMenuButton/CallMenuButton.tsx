import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './CallMenuButton.module.scss'

type CallMenuButtonProps = {
  setCallMenu?: React.Dispatch<React.SetStateAction<boolean>>
  callMenu?: boolean
  children?: ReactNode
  className?: string
  cross?: boolean
}

const CallMenuButton: FC<CallMenuButtonProps> = ({
  setCallMenu,
  callMenu,
  children,
  className,
  cross = false,
}) => {
  const handleCallMenu = () => {
    setCallMenu && setCallMenu((prev) => !prev)
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
