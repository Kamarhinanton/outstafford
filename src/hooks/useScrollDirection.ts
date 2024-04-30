import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { setScrollDirection } from '@/store/reducers/scrollDirectionSlice'
import useDetectScroll from '@smakss/react-scroll-direction'

const useScrollDirection = () => {
  const dispatch: AppDispatch = useDispatch()
  const { scrollDir } = useDetectScroll()

  useEffect(() => {
    const handleScroll = () => {
      if (scrollDir === 'down') {
        dispatch(setScrollDirection('down'))
      } else if (scrollDir === 'up') {
        dispatch(setScrollDirection('up'))
      }
    }
    handleScroll()
  }, [scrollDir])
}

export default useScrollDirection
