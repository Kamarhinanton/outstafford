import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setIsMenuActive } from '@/store/reducers/callMenuSlice'

const useRouteChange = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      dispatch(setIsMenuActive(false))
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router, dispatch])
}

export default useRouteChange
