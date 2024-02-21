import React, { useEffect, useRef, useState } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import indicatorJson from '@/components/MouseIndicatorScroll/data/indicator.json'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import classNames from 'classnames'
import { useViewportPosition } from '@/hooks/useViewportPosition'

import styles from './MouseIndicatorScroll.module.scss'
const MouseIndicatorScroll = () => {
  const isPreloaderActive = useSelector(
    (state: RootState) => state.preloaderState.isPreloaderActive,
  )
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const { isTop, isBottom } = useViewportPosition()

  const mods = {
    [styles['top']]: isTop,
    [styles['bottom']]: isBottom,
  }

  useEffect(() => {
    setTimeout(() => {
      if (!isPreloaderActive && lottieRef.current) {
        lottieRef.current.play()
      }
    }, 800)
  }, [isPreloaderActive])

  return (
    <section className={classNames(styles['indicator'], mods)}>
      <Lottie
        animationData={indicatorJson}
        autoplay={false}
        loop={false}
        lottieRef={lottieRef}
      />
    </section>
  )
}

export default MouseIndicatorScroll
