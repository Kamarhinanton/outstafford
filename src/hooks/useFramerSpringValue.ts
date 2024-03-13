import { useMotionValue, useSpring } from 'framer-motion'

const useFramerSpringValue = (initialNumber: number) => {
  const motionValue = useMotionValue(initialNumber)
  const springValue = useSpring(motionValue, {
    stiffness: 1500,
    damping: 300,
    velocity: 1,
  })
  return [motionValue, springValue]
}

export default useFramerSpringValue
