import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import vertexShader from '!!raw-loader!./vertexShader.glsl'
import fragmentShader from '!!raw-loader!./fragmentShader.glsl'
import { MathUtils, Mesh, ShaderMaterial } from 'three'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import { useTransform, m } from 'framer-motion'
import useFramerSpringValue from '@/hooks/useFramerSpringValue'

import styles from './HeroAnimation.module.scss'

const Blob = () => {
  const mesh = useRef<Mesh>(null)
  const hover = useRef(false)

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.2,
      },
      u_time: {
        value: 0.0,
      },
    }),
    [],
  )

  useFrame((state) => {
    const { clock } = state
    if (mesh.current) {
      const shaderMaterial = mesh.current.material as ShaderMaterial
      shaderMaterial.uniforms.u_time.value = 0.3 * clock.getElapsedTime()

      shaderMaterial.uniforms.u_intensity.value = MathUtils.lerp(
        shaderMaterial.uniforms.u_intensity.value,
        hover.current ? 1 : 0.3,
        0.05,
      )
    }
  })

  const { width } = useWindowDimensions()
  const { camera } = useThree()

  useEffect(() => {
    if (width <= breakpointMob) {
      camera.position.set(1, 0, 8)
    } else {
      camera.position.set(0, 0, 5)
    }
  }, [width])

  return (
    <mesh
      ref={mesh}
      position={[3, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  )
}

const HeroAnimation = () => {
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
    <m.div
      style={{ backgroundColor: colorX }}
      className={styles['hero-animation']}
    >
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
        <Blob />
      </Canvas>
    </m.div>
  )
}

export default HeroAnimation
