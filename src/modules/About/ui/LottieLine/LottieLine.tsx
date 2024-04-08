import React, { useRef } from 'react'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import loaderJson from './data/line.json'
import styles from './LottieLine.module.scss'

const LottieLine = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const refLottie = useRef<LottieRefCurrentProps | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end center'],
  })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 26])

  useMotionValueEvent(progress, 'change', (latest) => {
    const roundedLatest = Math.round(latest)
    refLottie.current?.goToAndStop(roundedLatest, true)
  })

  return (
    <div ref={targetRef} className={styles['line']}>
      <Lottie
        className={styles['line__lottie']}
        autoplay={false}
        animationData={loaderJson}
        lottieRef={refLottie}
      />
    </div>
  )
}

export default LottieLine
