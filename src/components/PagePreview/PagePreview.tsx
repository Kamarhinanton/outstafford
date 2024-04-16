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
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  animate: {
    height: '100%',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    bottom: 'initial',
    top: 0,
    height: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
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

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <AnimatePresence>
      {!isFirstLoading && isAnimate && (
        <LazyMotion features={domAnimation}>
          <m.div {...variants} className={styles['page-preview']}>
            <div className={styles['page-preview__inner']}>
              {title && (
                <h1
                  className={classNames(
                    'h1',
                    styles['page-preview__inner_title'],
                  )}
                >
                  {title}
                </h1>
              )}
              {description && (
                <p
                  className={classNames(
                    'h3',
                    styles['page-preview__inner_description'],
                  )}
                >
                  {description
                    ?.split(' ')
                    ?.map((word, index) => (
                      <span key={`${word + index}`}>
                        {word.replace('.', ' ')}
                      </span>
                    ))}
                </p>
              )}
            </div>
          </m.div>
        </LazyMotion>
      )}
    </AnimatePresence>
  )
}

export default PagePreview
