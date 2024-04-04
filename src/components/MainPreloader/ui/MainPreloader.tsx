import React, { FC } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import loaderJson from '../data/preloader.json'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { setIsPreloaderActive } from '@/store/reducers/preloaderStateSlice'

import styles from './MainPreloader.module.scss'

const preloaderVariant = {
  initial: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
  },
}

const MainPreloader: FC = () => {
  const isPreloaderActive = useSelector(
    (state: RootState) => state.preloaderState.isPreloaderActive,
  )
  const dispatch: AppDispatch = useDispatch()

  return (
    <AnimatePresence>
      {isPreloaderActive && (
        <motion.div {...preloaderVariant} className={styles['main-preloader']}>
          <Lottie
            className={styles['main-preloader__lottie']}
            animationData={loaderJson}
            autoplay={true}
            loop={false}
            onComplete={() => dispatch(setIsPreloaderActive(false))}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MainPreloader
