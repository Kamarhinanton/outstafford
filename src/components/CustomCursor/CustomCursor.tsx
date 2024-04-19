import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

import styles from './CustomCursor.module.scss'

const CustomCursor = () => {
  const [isOnSubject, setIsOnSubject] = useState(false)
  const { route } = useRouter()
  const mainCursor = useRef<HTMLDivElement>(null)

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  })

  const cursorVariant = {
    default: {
      width: '12rem',
      height: '12rem',
      opacity: 1,
    },
    onSubject: {
      width: 0,
      height: 0,
      opacity: 0,
    },
  }

  const isPopUpActive = useSelector(
    (state: RootState) => state.callPopUp.isPopUpActive,
  )

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event

      if (mainCursor.current) {
        positionRef.current.mouseX =
          clientX - mainCursor.current.clientWidth / 2
        positionRef.current.mouseY =
          clientY - mainCursor.current.clientHeight / 2
      }
    })
  }, [])

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse)
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.destinationX += distanceX
          positionRef.current.destinationY += distanceY
        }
      }
      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
      }
    }
    followMouse()
  }, [])

  useEffect(() => {
    let isInside = false
    setIsOnSubject(false)

    const handleMouseEnter = () => {
      if (!isInside) {
        setIsOnSubject(true)
        isInside = true
      }
    }

    const handleMouseLeave = () => {
      if (isInside) {
        setIsOnSubject(false)
        isInside = false
      }
    }

    const addEventListeners = () => {
      const links = document.querySelectorAll(
        'a:not(.no-hover-cursor), button, input, textarea, canvas, iframe, .hover-cursor',
      )
      links.forEach((link) => {
        link.addEventListener('mouseover', handleMouseEnter)
        link.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    const removeEventListeners = () => {
      const links = document.querySelectorAll(
        'a:not(.no-hover-cursor), button, input, textarea, canvas, iframe, .hover-cursor',
      )
      links.forEach((link) => {
        link.removeEventListener('mouseover', handleMouseEnter)
        link.removeEventListener('mouseleave', handleMouseLeave)
      })
    }

    if (typeof window !== 'undefined') {
      const timeoutId = setTimeout(addEventListeners, 500)

      return () => {
        clearTimeout(timeoutId)
        removeEventListeners()
      }
    }
  }, [route, isPopUpActive])

  return (
    <>
      <motion.div
        className={classNames(styles['customCursor'])}
        ref={mainCursor}
        variants={cursorVariant}
        animate={isOnSubject ? 'onSubject' : 'default'}
      ></motion.div>
    </>
  )
}

export default CustomCursor
