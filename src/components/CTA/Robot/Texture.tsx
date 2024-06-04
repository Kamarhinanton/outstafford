import { useGLTF } from '@react-three/drei'
import useFramerSpringValue from '@/hooks/useFramerSpringValue'
import { useTransform } from 'framer-motion'
import { degToRad } from 'three/src/math/MathUtils.js'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion-3d'
import { Mesh } from 'three'

export const Texture = () => {
  const { nodes } = useGLTF('/robot.gltf')
  const [cardX, cardXSpring] = useFramerSpringValue(0)
  const [cardY, cardYSpring] = useFramerSpringValue(0)

  const rotateX = useTransform(
    cardXSpring,
    [0, 1],
    [degToRad(-25), degToRad(25)],
  )
  const rotateY = useTransform(
    cardYSpring,
    [1, 0],
    [degToRad(-25), degToRad(25)],
  )

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      requestAnimationFrame(() => {
        const offsetX = event.clientX / window.innerWidth
        const offsetY = event.clientY / window.innerHeight
        cardX.set(offsetX)
        cardY.set(offsetY)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.group
      scale={0.05}
      dispose={null}
      rotation-y={rotateX}
      rotation-z={rotateY}
    >
      <mesh geometry={(nodes.Cylinder as Mesh).geometry}>
        <meshStandardMaterial color={0x75fb61} />
      </mesh>
      <mesh geometry={(nodes.Cylinder_2 as Mesh).geometry}>
        <meshStandardMaterial color={0x75fb61} />
      </mesh>
      <mesh geometry={(nodes.Subdivision_Surface_1 as Mesh).geometry}>
        <meshStandardMaterial color={0x75fb61} />
      </mesh>
      <mesh geometry={(nodes.Subdivision_Surface_2 as Mesh).geometry}>
        <meshStandardMaterial color={0x75fb61} metalness={1.7} roughness={2} />
      </mesh>
      <mesh geometry={(nodes.Sweep as Mesh).geometry}>
        <meshStandardMaterial color={0x75fb61} />
      </mesh>
      <mesh geometry={(nodes.Cylinder_3 as Mesh).geometry}>
        <meshStandardMaterial color={0x75fb61} />
      </mesh>
    </motion.group>
  )
}

useGLTF.preload('/robot.gltf')
