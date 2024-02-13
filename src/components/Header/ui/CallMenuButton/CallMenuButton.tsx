import React, { useState } from 'react'
import styles from './CallMenuButton.module.scss'
import classNames from 'classnames'

const CallMenuButton = () => {
  const [callMenu, setCallMenu] = useState(false)
  const handleCallMenu = () => {
    setCallMenu((prev) => !prev)
  }

  const mods = {
    [styles.open]: callMenu,
  }

  return (
    <button
      onClick={handleCallMenu}
      className={classNames(styles['call-menu-button'], mods)}
    >
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
