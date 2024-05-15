import React, { useRef, useState } from 'react'
import Container from '@/app/layouts/Container'
import { useMotionValueEvent, useScroll, useTransform, m } from 'framer-motion'
import useDetectScroll from '@smakss/react-scroll-direction'

import styles from './SmallDescription.module.scss'

const words =
  'Empowering startups. We handle app development and support, so you can focus on growing your business.'

const variants = {
  visible: {
    color: 'var(--primary-color)',
  },
  hidden: {
    color: 'white',
  },
}

const SmallDescription = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const wordsArray = words.split(' ')
  const [active, setActive] = useState<null | number>(null)
  const { scrollDir } = useDetectScroll()

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['center end', 'center start'],
  })

  const progress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, wordsArray.length - 1],
  )

  const handleProgressChange = (latest: number | null) => {
    if (latest !== null) {
      const roundedLatest = Math.round(latest)
      setActive(roundedLatest)
    }
  }

  useMotionValueEvent(progress, 'change', handleProgressChange)

  return (
    <section className={styles['description']}>
      <Container size={'small'}>
        <h2 ref={targetRef}>
          {wordsArray.map((word, index) => (
            <m.span
              variants={variants}
              initial="hidden"
              animate={
                (active === index && scrollDir === 'down' && 'visible') ||
                (active === index && scrollDir === 'up' && 'hidden')
              }
              key={index}
            >
              {word + ' '}
            </m.span>
          ))}
        </h2>
      </Container>
    </section>
  )
}

export default SmallDescription
