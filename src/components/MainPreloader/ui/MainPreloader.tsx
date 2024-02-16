import React, { FC, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import loaderJson from '../data/preloader.json'
import { motion } from 'framer-motion'

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
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div {...preloaderVariant} className={styles['main-preloader']}>
          <Lottie
            className={styles['main-preloader__lottie']}
            animationData={loaderJson}
            autoplay={true}
            loop={false}
            onComplete={() => setIsVisible(false)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MainPreloader
