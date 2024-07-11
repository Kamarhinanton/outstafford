import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Texture } from '@/modules/Home/ui/HeroSection/Spot/Texture'

import styles from './Spot.module.scss'

const Spot = () => {
  return (
    <div className={styles['spot']}>
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
    </div>
  )
}

export default Spot
