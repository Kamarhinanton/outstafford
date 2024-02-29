import React, { FC, MouseEvent, ReactNode } from 'react'
import SectionCursor from '@/components/SectionCursor/SectionCursor'
import useFramerSpringValue from '@/hooks/useFramerSpringValue'
import { motion, useTransform } from 'framer-motion'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'

type CardTransformPerspectiveType = {
  children: ReactNode
  className: string
}

const CardTransformPerspective: FC<CardTransformPerspectiveType> = ({
  children,
  className,
}) => {
  const [cardX, cardXSpring] = useFramerSpringValue(0)
  const [cardY, cardYSpring] = useFramerSpringValue(0)
  const [cardMouseX, cardMouseSpringX] = useFramerSpringValue(-500)
  const [cardMouseY, cardMouseSpringY] = useFramerSpringValue(-500)
  const rotateX = useTransform(cardYSpring, [800, -800], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(cardXSpring, [800, -800], ['-7.5deg', '7.5deg'])
  const { width } = useWindowDimensions()

  const handleMouseMove = (event: MouseEvent) => {
    if (width > breakpointMob) {
      const offsetX = event.clientX - window.innerWidth / 2
      const offsetY = event.clientY - window.innerHeight / 2
      const rect = event.currentTarget.getBoundingClientRect()
      const mouseX = Math.round(event.clientX - rect.left) - 250
      const mouseY = Math.round(event.clientY - rect.top) - 250

      cardX.set(offsetX)
      cardY.set(offsetY)
      cardMouseX.set(mouseX)
      cardMouseY.set(mouseY)
    }
  }

  const handleMouseLeave = () => {
    if (width > breakpointMob) {
      cardX.set(0)
      cardY.set(0)
    }
  }
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        rotateX,
        rotateY,
      }}
    >
      <SectionCursor
        xPosition={cardMouseSpringX}
        yPosition={cardMouseSpringY}
      />
      {children}
    </motion.div>
  )
}

export default CardTransformPerspective
