import React, { FC, SetStateAction, useEffect } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'

import styles from './FormPopup.module.scss'

type FormPopupType = {
  message: string
  setIsVisible: React.Dispatch<
    SetStateAction<{ visible: boolean; message: string }>
  >
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

const FormPopup: FC<FormPopupType> = ({ message, setIsVisible }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible((prev) => {
        return {
          ...prev,
          visible: false,
          message: '',
        }
      })
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <LazyMotion features={domAnimation}>
      <m.div {...formVariant} className={styles['form-popup']}>
        <div className={styles['form-popup__inner']}>{message}</div>
      </m.div>
    </LazyMotion>
  )
}

export default FormPopup
