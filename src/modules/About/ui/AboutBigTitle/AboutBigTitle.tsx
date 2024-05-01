import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import { useLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/router'
import useDetectScroll from '@smakss/react-scroll-direction'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { setIsHeaderAnimated } from '@/store/reducers/isHeaderAnimatedSlice'

import styles from './AboutBigTitle.module.scss'

const AboutBigTitle = () => {
  const router = useRouter()
  const { scrollDir } = useDetectScroll({ thr: 10 })
  const [scrolling, setIsScrolling] = useState(false)
  const [isLenisScrolling, setIsLenisScrolling] = useState(false)
  const dispatch: AppDispatch = useDispatch()
  const lenis = useLenis(({ isScrolling }) => {
    setIsLenisScrolling(isScrolling)
  })

  useEffect(() => {
    if (router.query.param) {
      dispatch(setIsHeaderAnimated(false))

      setTimeout(() => {
        lenis?.scrollTo('#work', {
          immediate: true,
          onComplete: handleComplete,
        })
      }, 2000)
    }

    return () => {
      dispatch(setIsHeaderAnimated(true))
    }
  }, [])

  const handleComplete = () => {
    setIsScrolling(true)
  }

  useEffect(() => {
    if (scrolling && isLenisScrolling && scrollDir === 'down') {
      dispatch(setIsHeaderAnimated(true))
      setIsScrolling(false)
    }
  }, [scrolling, isLenisScrolling])

  return (
    <div id="work" className={styles['about-title']}>
      <Container>
        <h1 className={classNames(styles['title'], 'h1')}>
          <strong>Here&apos;s how</strong>
          <strong>we create</strong>
          <strong>
            our <span>best apps</span>
          </strong>
        </h1>
      </Container>
    </div>
  )
}

export default AboutBigTitle
