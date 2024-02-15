import React, { FC, ReactNode } from 'react'
import styles from './CallMenuButton.module.scss'
import classNames from 'classnames'

type CallMenuButtonProps = {
  setCallMenu?: React.Dispatch<React.SetStateAction<boolean>>
  callMenu?: boolean
  children?: ReactNode
  className?: string
}

const CallMenuButton: FC<CallMenuButtonProps> = ({
  setCallMenu,
  callMenu,
  children,
  className,
}) => {
  const handleCallMenu = () => {
    setCallMenu && setCallMenu((prev) => !prev)
  }

  const mods = {
    [styles.open]: callMenu,
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
