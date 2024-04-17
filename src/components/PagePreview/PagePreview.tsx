import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { setIsFirstLoading } from '@/store/reducers/isFirstLoadingSlice'

import styles from './PagePreview.module.scss'

type PagePreviewType = {
  title?: string
  description?: string
}

const variants = {
  initial: {
    height: 0,
  },
  animate: {
    height: '100%',
    transition: {
      duration: 1.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    bottom: 'initial',
    top: 0,
    height: 0,
    transition: {
      duration: 1.7,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const variantsDefault = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: 0,
    opacity: 0,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
}

const variantsTitle = {
  initial: {
    y: '100vh',
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: '-100vh',
    transition: {
      duration: 1.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const container = {
  animate: (i = 1) => ({
    transition: { staggerChildren: 0.03, delayChildren: 0.1 * i },
  }),
  exit: (i = 1) => ({
    transition: { staggerChildren: 0.03, delayChildren: 0.1 * i },
  }),
}

const PagePreview: FC<PagePreviewType> = ({ title, description }) => {
  const [isAnimate, setIsAnimate] = useState(true)
  const dispatch: AppDispatch = useDispatch()
  const isFirstLoading = useSelector(
    (state: RootState) => state.isFirstLoading.isFirstLoading,
  ) as boolean

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnimate(false)
      isFirstLoading && dispatch(setIsFirstLoading(false))
    }, 2000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <AnimatePresence>
      {isAnimate && (
        <LazyMotion features={domAnimation}>
          <m.div
            variants={!isFirstLoading ? variants : variantsDefault}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles['page-preview']}
          >
            <div className={styles['page-preview__inner']}>
              {title && (
                <m.p
                  className={classNames(
                    'h1',
                    styles['page-preview__inner_title'],
                  )}
                  variants={container}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <m.span variants={variantsTitle}>{title}</m.span>
                </m.p>
              )}
              {description && (
                <m.p
                  className={classNames(
                    'h3',
                    styles['page-preview__inner_description'],
                  )}
                  variants={container}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {description?.split(' ')?.map((word, index) => (
                    <m.span variants={variantsTitle} key={index} custom={index}>
                      {word.replace('.', ' ')}
                    </m.span>
                  ))}
                </m.p>
              )}
            </div>
          </m.div>
        </LazyMotion>
      )}
    </AnimatePresence>
  )
}

export default PagePreview
