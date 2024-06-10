import React, { FC, SetStateAction, useEffect } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import classNames from 'classnames'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'

import styles from './FormPopup.module.scss'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

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
  const disablePopUp = () => {
    setIsVisible((prev) => {
      return {
        ...prev,
        visible: false,
        message: '',
      }
    })
  }
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      disablePopUp()
    }
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div {...formVariant} className={styles['form-popup']}>
        <div onClick={handleClick} className={styles['form-popup__wrapper']}>
          <div className={styles['form-popup__wrapper_inner']}>
            <BackgroundImage
              className={styles['logo']}
              src={'/images/logo.png'}
              alt={'logo'}
              position={'contain'}
            />
            <h1 className={classNames(styles['title'], 'h2')}>
              Thanks for reaching out!
            </h1>
            <p className={styles['description']}>
              We&apos;ve received your request and we’ll be in touch soon!
            </p>
            <ButtonPrimary
              onClick={() => disablePopUp()}
              variant={'green'}
              size={'large'}
            >
              Close
            </ButtonPrimary>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  )
}

export default FormPopup
