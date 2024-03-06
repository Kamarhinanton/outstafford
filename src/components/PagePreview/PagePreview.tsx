import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './PagePreview.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { setIsMenuActive } from '@/store/reducers/callMenuSlice'
import { setIsFirstLoading } from '@/store/reducers/isFirstLoadingSlice'

type PagePreviewType = {
  title: string
  description: string
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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnimate(false)
      dispatch(setIsFirstLoading(false))
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [])

  const isFirstLoading = useSelector(
    (state: RootState) => state.isFirstLoading.isFirstLoading,
  ) as boolean

  return (
    <AnimatePresence>
      {!isFirstLoading && isAnimate && (
        <motion.div {...variants} className={styles['page-preview']}>
          <div className={styles['page-preview__inner']}>
            <h1>{title}</h1>
            <p
              className={classNames(
                'h3',
                styles['page-preview__inner_description'],
              )}
            >
              {description}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PagePreview
