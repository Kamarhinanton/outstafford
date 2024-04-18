import React from 'react'
import { useLenis } from '@studio-freight/react-lenis'
import { AppDispatch } from '@/store/store'
import { useDispatch } from 'react-redux'
import routes from '@/utils/routes'
import { setIsMenuActive } from '@/store/reducers/callMenuSlice'
import { setActiveLink } from '@/store/reducers/activeLinkSlice'

export const shouldHandleAnchor = (
  routerPath: string,
  linkHref: string,
): boolean =>
  (routerPath === routes.public.about ||
    routerPath === `${routes.public.about}?param=work`) &&
  (linkHref === routes.public.about ||
    linkHref === `${routes.public.about}?param=work`)

const useLenisAnchor = () => {
  const lenis = useLenis()
  const dispatch: AppDispatch = useDispatch()

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault()
    if (href === routes.public.about) {
      lenis?.scrollTo('top')
      dispatch(setActiveLink(routes.public.about))
      dispatch(setIsMenuActive(false))
    }
    if (href === `${routes.public.about}?param=work`) {
      lenis?.scrollTo('#work')
      dispatch(setActiveLink(`${routes.public.about}?param=work`))
      dispatch(setIsMenuActive(false))
    }
  }
  return {
    handleAnchor,
  }
}

export default useLenisAnchor
