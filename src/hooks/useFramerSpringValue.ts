import { useMotionValue, useSpring } from 'framer-motion'

const useFramerSpringValue = (initialNumber: number) => {
  const motionValue = useMotionValue(initialNumber)
  const springValue = useSpring(motionValue)
  return [motionValue, springValue]
}

export default useFramerSpringValue
