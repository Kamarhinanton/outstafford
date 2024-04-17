import React, { useEffect } from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import { useLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/router'

import styles from './AboutBigTitle.module.scss'

const AboutBigTitle = () => {
  const lenis = useLenis()
  const router = useRouter()

  useEffect(() => {
    if (router.query.param) {
      setTimeout(() => {
        lenis?.scrollTo('#work', { immediate: true })
      }, 2000)
    }
  }, [])

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
