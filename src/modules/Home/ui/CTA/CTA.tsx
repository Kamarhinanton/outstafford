import React, { MouseEvent } from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import useWindowDimensions from '@/hooks/useWindowDimensions'

import styles from './CTA.module.scss'
import { breakpointMob } from '@/utils/variables'

const Cta = () => {
  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)
  const mouseXSpring = useSpring(cardX)
  const mouseYSpring = useSpring(cardY)
  const rotateX = useTransform(mouseYSpring, [800, -800], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [800, -800], ['-7.5deg', '7.5deg'])
  const { width } = useWindowDimensions()

  const handleMouseMove = (event: MouseEvent) => {
    if (width > breakpointMob) {
      const offsetX = event.clientX - window.innerWidth / 2
      const offsetY = event.clientY - window.innerHeight / 2

      cardX.set(offsetX)
      cardY.set(offsetY)
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
