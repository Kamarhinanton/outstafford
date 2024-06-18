import React, { useEffect, useMemo, useRef } from 'react'
import { MathUtils, Mesh, ShaderMaterial } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import vertexShader from '!!raw-loader!./data/vertexShader.glsl'
import fragmentShader from '!!raw-loader!./data/fragmentShader.glsl'
export const Texture = () => {
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
      camera.position.set(1, -0.5, 8)
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
      <icosahedronGeometry args={[2, 65]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  )
}
