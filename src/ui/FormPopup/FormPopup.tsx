import React, { FC, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './FormPopup.module.scss'

type FormPopupType = {
  message: string
  visible: boolean
}

const formVariant = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
    delay: 0.5,
  },
}

const FormPopup: FC<FormPopupType> = ({ message, visible }) => {
  const [isVisible, setIsVisible] = useState(visible)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div {...formVariant} className={styles['form-popup']}>
          <div className={styles['form-popup__inner']}>{message}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FormPopup
