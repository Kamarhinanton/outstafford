import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import { useLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { setIsHeaderAnimated } from '@/store/reducers/isHeaderAnimatedSlice'
import useScrollDown from '@/hooks/useScrollDown'
import routes from '@/utils/routes'
import useActiveLinkInView from '@/hooks/useActiveLinkInView'

import styles from './AboutBigTitle.module.scss'

const AboutBigTitle = () => {
  const ref = useRef(null)
  const router = useRouter()
  const dispatch: AppDispatch = useDispatch()
  const lenis = useLenis()
  const { isScrollingDown, lockMeasure, setLockMeasure, setPrevScrollPos } =
    useScrollDown()
  useActiveLinkInView({ ref, linkInView: `${routes.public.about}?param=work` })

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
    setLockMeasure(false)
    setPrevScrollPos(window.scrollY)
  }

  useEffect(() => {
    if (!lockMeasure && isScrollingDown) {
      dispatch(setIsHeaderAnimated(true))
      setLockMeasure(true)
    }
  }, [isScrollingDown])

  return (
    <div ref={ref} id="work" className={styles['about-title']}>
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
