import { FC, ReactNode, useRef } from 'react'
import classNames from 'classnames'
import { useInView, motion, LazyMotion, domAnimation } from 'framer-motion'

import styles from './AnimatedElement.module.scss'

type AnimatedElementProps = {
  children: ReactNode
  className?: string
  delay?: number
  amount?: 'all' | 'some' | number
}

const AnimatedElement: FC<AnimatedElementProps> = ({
  children,
  className,
  delay = 0,
  amount = 'all',
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: amount })

  const elementFrame = {
    visible: {
      opacity: 1,
      transition: {
        ease: 'anticipate',
        duration: 1.2,
        delay,
      },
    },
    hidden: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className={classNames(styles['element'], className)}
        variants={elementFrame}
        initial="hidden"
        animate={isInView ? 'visible' : ''}
        exit={'exit'}
        ref={ref}
      >
        {children}
      </motion.div>
    </LazyMotion>
  )
}

export default AnimatedElement
