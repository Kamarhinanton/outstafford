import React, { FC, SetStateAction } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import classNames from 'classnames'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './FormPopup.module.scss'

type FormPopupType = {
  error: boolean
  setIsVisible: React.Dispatch<
    SetStateAction<{ visible: boolean; error: boolean }>
  >
}

const formVariant = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  transition: {
    ease: 'easeInOut',
    duration: 0.3,
  },
}

const FormPopup: FC<FormPopupType> = ({ error, setIsVisible }) => {
  const disablePopUp = () => {
    setIsVisible((prev) => {
      return {
        ...prev,
        visible: false,
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
            {error ? (
              <>
                <h1 className={classNames(styles['title'], 'h2')}>
                  Oops, something went wrong!
                </h1>
                <p className={styles['description']}>Try again later.</p>
              </>
            ) : (
              <>
                <h1 className={classNames(styles['title'], 'h2')}>
                  Thanks for reaching out!
                </h1>
                <p className={styles['description']}>
                  We&apos;ve received your request and we’ll be in touch soon!
                </p>
              </>
            )}

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
