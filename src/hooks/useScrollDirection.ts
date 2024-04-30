import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { setScrollDirection } from '@/store/reducers/scrollDirectionSlice'

const useScrollDirection = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      if (scrollTop > lastScrollTop) {
        dispatch(setScrollDirection('down'))
      } else {
        dispatch(setScrollDirection('up'))
      }
      lastScrollTop = scrollTop
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export default useScrollDirection
