import React, { useCallback, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import { useTransform, m } from 'framer-motion'
import useFramerSpringValue from '@/hooks/useFramerSpringValue'
import { Texture } from '@/modules/Home/ui/HeroSection/Spot/Texture'

import styles from './Spot.module.scss'

const Spot = () => {
  const [x, xSpring] = useFramerSpringValue(0)
  const colorX = useTransform(xSpring, [0, 1], ['#0F0F0F', '#1F331C'])
  const { width } = useWindowDimensions()

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (width > breakpointMob) {
        const windowWidth = window.innerWidth
        requestAnimationFrame(() => {
          const offsetX = event.clientX / windowWidth
          x.set(offsetX)
        })
      }
    },
    [width],
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <m.div style={{ backgroundColor: colorX }} className={styles['spot']}>
      <Canvas
        orthographic={true}
        camera={{
          position: [0, 0, 5],
          left: 0,
          right: 10,
          top: 3,
          bottom: -3,
          zoom: 230,
          near: 2,
          far: 10,
        }}
      >
        <Texture />
      </Canvas>
    </m.div>
  )
}

export default Spot
