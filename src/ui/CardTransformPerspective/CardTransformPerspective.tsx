import React, { FC, ReactNode, useEffect, useRef, useCallback } from 'react'
import SectionCursor from '@/ui/SectionCursor/SectionCursor'
import useFramerSpringValue from '@/hooks/useFramerSpringValue'
import { motion, useTransform } from 'framer-motion'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'

type CardTransformPerspectiveType = {
  children: ReactNode
  className?: string
  cursor?: boolean
  rotateRangeX?: number[]
  rotateRangeY?: number[]
}

const CardTransformPerspective: FC<CardTransformPerspectiveType> = ({
  children,
  className,
  cursor = true,
  rotateRangeX = [800, -800],
  rotateRangeY = [800, -800],
}) => {
  const [cardX, cardXSpring] = useFramerSpringValue(0)
  const [cardY, cardYSpring] = useFramerSpringValue(0)
  const [cardMouseX, cardMouseSpringX] = useFramerSpringValue(-500)
  const [cardMouseY, cardMouseSpringY] = useFramerSpringValue(-500)
  const rotateX = useTransform(cardYSpring, rotateRangeX, ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(cardXSpring, rotateRangeY, ['-7.5deg', '7.5deg'])
  const { width } = useWindowDimensions()
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect() as DOMRect
      if (width > breakpointMob && rect) {
        const isOut =
          event.clientY < rect.top ||
          event.clientY > rect.top + rect.height ||
          event.clientX < rect.left ||
          event.clientX > rect.left + rect.width
        if (isOut) {
          cardX.set(0)
          cardY.set(0)
        } else {
          requestAnimationFrame(() => {
            const offsetX = event.clientX - window.innerWidth / 2
            const offsetY = event.clientY - window.innerHeight / 2
            const mouseX = Math.round(event.clientX - rect.left) - 250
            const mouseY = Math.round(event.clientY - rect.top) - 250
            cardX.set(offsetX)
            cardY.set(offsetY)
            cardMouseX.set(mouseX)
            cardMouseY.set(mouseY)
          })
        }
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
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
      }}
    >
      {cursor && (
        <SectionCursor
          xPosition={cardMouseSpringX}
          yPosition={cardMouseSpringY}
        />
      )}
      {children}
    </motion.div>
  )
}

export default CardTransformPerspective
