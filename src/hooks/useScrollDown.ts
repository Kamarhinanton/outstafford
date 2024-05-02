import { useEffect, useState } from 'react'

const useScrollDetector = () => {
  const [scrollData, setScrollData] = useState({
    isScrollingDown: false,
    prevScrollPos: 0,
    lockMeasure: true,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollData.lockMeasure) {
        const currentScrollPos =
          window.scrollY || document.documentElement.scrollTop

        setScrollData((prevState) => ({
          ...prevState,
          isScrollingDown: currentScrollPos > prevState.prevScrollPos,
          prevScrollPos: currentScrollPos,
        }))
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollData.lockMeasure, scrollData.prevScrollPos])

  return {
    ...scrollData,
    setLockMeasure: (value: boolean) =>
      setScrollData((prevState) => ({ ...prevState, lockMeasure: value })),
    setPrevScrollPos: (value: number) =>
      setScrollData((prevState) => ({ ...prevState, prevScrollPos: value })),
  }
}

export default useScrollDetector
