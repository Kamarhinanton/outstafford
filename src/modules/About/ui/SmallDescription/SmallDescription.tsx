import React, { FC, ReactNode, useRef } from 'react'
import Container from '@/app/layouts/Container'
import { useScroll, useTransform, m, MotionValue } from 'framer-motion'

import styles from './SmallDescription.module.scss'

const paragraph =
  'Empowering startups. We handle app development and support, so you can focus on growing your business.'

const SmallDescription = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const words = paragraph.split(' ')

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['center end', 'center start'],
  })

  return (
    <section ref={targetRef} className={styles['description']}>
      <Container className={styles['description__container']} size={'small'}>
        <h2>
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            )
          })}
        </h2>
      </Container>
    </section>
  )
}

export default SmallDescription

type WordType = {
  children: ReactNode
  range: number[]
  progress: MotionValue
}

const Word: FC<WordType> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className={styles['word']}>
      <span className={styles['word__shadow']}>{children}</span>
      <m.span style={{ opacity }}>{children}</m.span>
    </span>
  )
}
