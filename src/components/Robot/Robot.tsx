import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Texture } from '@/components/Robot/Texture'

import styles from './Robot.module.scss'

const Robot = () => {
  return (
    <div className={styles.robot}>
      <Canvas
        camera={{
          position: [30, 0, 0],
          fov: 40,
        }}
      >
        <directionalLight position={[10, 10, -10]} intensity={2} />
        <Suspense fallback={null}>
          <Texture />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Robot
