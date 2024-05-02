import { RefObject, useEffect } from 'react'
import { setActiveLink } from '@/store/reducers/activeLinkSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useInView } from 'framer-motion'
import { RootState } from '@/store/store'

const useActiveLinkInView = ({
  ref,
  linkInView,
}: {
  ref: RefObject<HTMLDivElement>
  linkInView: string
}) => {
  const dispatch = useDispatch()
  const isInView = useInView(ref)
  const activeLink = useSelector(
    (state: RootState) => state.activeLink.activeLink,
  )

  useEffect(() => {
    if (isInView && linkInView != activeLink) {
      dispatch(setActiveLink(linkInView))
    }
  }, [isInView])
}

export default useActiveLinkInView
