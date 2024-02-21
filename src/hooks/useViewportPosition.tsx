import { useCallback, useEffect, useState } from 'react'

const useViewportPosition = () => {
  const [isTop, setIsTop] = useState<boolean>(false)
  const [isBottom, setIsBottom] = useState<boolean>(false)

  const handleScroll = useCallback(() => {
    const currentPosition = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    setIsTop(currentPosition <= 0)
    setIsBottom(currentPosition + windowHeight >= documentHeight)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return {
    isTop,
    isBottom,
  }
}

export { useViewportPosition }
