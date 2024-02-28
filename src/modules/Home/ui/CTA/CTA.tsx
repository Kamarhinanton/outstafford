import React, { MouseEvent } from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'

import styles from './CTA.module.scss'

const Cta = () => {
  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)
  const cardMouseX = useMotionValue(-500)
  const cardMouseY = useMotionValue(-500)
  const cardSpringX = useSpring(cardMouseX)
  const cardSpringY = useSpring(cardMouseY)
  const mouseXSpring = useSpring(cardX)
  const mouseYSpring = useSpring(cardY)
  const rotateX = useTransform(mouseYSpring, [800, -800], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [800, -800], ['-7.5deg', '7.5deg'])
  const { width } = useWindowDimensions()

  const handleMouseMove = (event: MouseEvent) => {
    if (width > breakpointMob) {
      const offsetX = event.clientX - window.innerWidth / 2
      const offsetY = event.clientY - window.innerHeight / 2
      const rect = event.currentTarget.getBoundingClientRect()
      // const rectWidth = rect.width
      // const rectHeight = rect.height
      const mouseX = Math.round(event.clientX - rect.left) - 250
      const mouseY = Math.round(event.clientY - rect.top) - 250

      cardX.set(offsetX)
      cardY.set(offsetY)
      cardMouseX.set(mouseX)
      cardMouseY.set(mouseY)
      // console.log('y', cardSpringY)
      // console.log('x', cardSpringX)
    }
  }

  const handleMouseLeave = () => {
    if (width > breakpointMob) {
      cardX.set(0)
      cardY.set(0)
    }
  }

  return (
    <section className={styles['cta']}>
      <Container>
        <div
          style={{
            perspective: '2000px',
          }}
        >
          <motion.div
            className={styles['cta__wrapper']}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
            }}
          >
            <div className={styles['cursor']}>
              <motion.div
                className={styles['cursor__shadow']}
                style={{
                  x: cardSpringX,
                  y: cardSpringY,
                }}
              />
            </div>
            <div className={styles['cta__wrapper_content']}>
              <h2 className={classNames(styles['title'], styles['desk'], 'h2')}>
                Get your detailed estimate today
              </h2>
              <Link
                href={'/'}
                className={classNames(styles['title'], styles['mob'], 'h2')}
              >
                Book a meeting
              </Link>
              <p className={styles['description']}>
                Shoot us a message and we’ll reply within 8 hours
              </p>
              <ButtonPrimary
                className={styles['button']}
                size={'large'}
                variant={'green'}
              >
                Contact us
              </ButtonPrimary>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Cta
