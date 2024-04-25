import React, { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Texture from '@/components/Robot/Texture'
import styles from './Robot.module.scss'

const Robot = () => {
  return (
    <div className={styles.robot}>
      <Canvas camera={{ position: [382, 0, 0] }}>
        <Suspense fallback={null}>
          <Texture />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Robot

useGLTF.preload('/robot.gltf')
