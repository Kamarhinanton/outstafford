import React, { FC, useRef } from 'react'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import loaderJson from './data/line.json'
import classNames from 'classnames'

import styles from './LottieLine.module.scss'

type LottieLineType = {
  src?: unknown
  className?: string
  fps?: number
}

const LottieLine: FC<LottieLineType> = ({ src, className, fps = 26 }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const refLottie = useRef<LottieRefCurrentProps | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end center'],
  })
  const progress = useTransform(scrollYProgress, [0, 1], [0, fps])

  useMotionValueEvent(progress, 'change', (latest) => {
    const roundedLatest = Math.round(latest)
    refLottie.current?.goToAndStop(roundedLatest, true)
  })

  return (
    <div ref={targetRef} className={classNames(styles['line'], className)}>
      <Lottie
        className={styles['line__lottie']}
        autoplay={false}
        animationData={src ? src : loaderJson}
        lottieRef={refLottie}
      />
    </div>
  )
}

export default LottieLine
