import React, { FC, ReactNode, useEffect, useRef, useCallback } from 'react'
import useFramerSpringValue from '@/hooks/useFramerSpringValue'
import { motion, useTransform } from 'framer-motion'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import dynamic from 'next/dynamic'

const Cursor = dynamic(() => import('@/ui/SectionCursor/SectionCursor'), {
  ssr: false,
})

type CardTransformPerspectiveType = {
  children: ReactNode
  className?: string
  cursor?: boolean
  rotateRangeX?: string[]
  rotateRangeY?: string[]
}

const CardTransformPerspective: FC<CardTransformPerspectiveType> = ({
  children,
  className,
  cursor = true,
  rotateRangeX = ['5.5deg', '-5.5deg'],
  rotateRangeY = ['-5.5deg', '5.5deg'],
}) => {
  const [cardX, cardXSpring] = useFramerSpringValue(0)
  const [cardY, cardYSpring] = useFramerSpringValue(0)
  const [cardMouseX, cardMouseSpringX] = useFramerSpringValue(-500)
  const [cardMouseY, cardMouseSpringY] = useFramerSpringValue(-500)
  const rotateX = useTransform(cardYSpring, [0, 1], rotateRangeX)
  const rotateY = useTransform(cardXSpring, [1, 0], rotateRangeY)
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
          cardX.set(0.5)
          cardY.set(0.5)
        } else {
          requestAnimationFrame(() => {
            const offsetX = (event.clientX - rect.left) / rect.width
            const offsetY = (event.clientY - rect.top) / rect.height
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
    if (width <= breakpointMob) {
      cardX.set(0.5)
      cardY.set(0.5)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove, width])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
      }}
    >
      {cursor && width > breakpointMob && (
        <Cursor xPosition={cardMouseSpringX} yPosition={cardMouseSpringY} />
      )}
      {children}
    </motion.div>
  )
}

export default CardTransformPerspective
