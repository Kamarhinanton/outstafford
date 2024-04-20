import { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob, breakpointTablet } from '@/utils/variables'
import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { usePathname } from 'next/navigation'
import routes from '@/utils/routes'
import ReactLenis from '@studio-freight/react-lenis'
import { useRouter } from 'next/router'

const MobileCTA = dynamic(
  () => import('@/components/HeaderMobileCTA/HeaderMobileCTA'),
  {
    ssr: false,
  },
)

const MobileHeader = dynamic(
  () => import('@/components/HeaderMobile/ui/HeaderMobile'),
  {
    ssr: false,
  },
)

const CustomCursor = dynamic(
  () => import('@/components/CustomCursor/CustomCursor'),
  {
    ssr: false,
  },
)

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const { width } = useWindowDimensions()
  const pathname = usePathname()
  const router = useRouter()

  const [isVisible, setIsVisible] = useState({
    contact: false,
    career: false,
    privacy: false,
    terms: false,
    cookies: false,
  })

  const options = {
    duration: 1.5,
    smoothWheel: true,
    smoothTouch: true,
  }

  const dynamicPath = useMemo(() => {
    return router.query?.slug?.toString?.() ?? ''
  }, [router.query?.slug])

  useEffect(() => {
    switch (pathname) {
      case routes.public.contact:
        setIsVisible((prevState) => ({
          ...prevState,
          contact: true,
          career: false,
          privacy: false,
          terms: false,
          cookies: false,
        }))
        break
      case routes.public.terms:
        setIsVisible((prevState) => ({
          ...prevState,
          contact: false,
          career: false,
          privacy: false,
          terms: true,
          cookies: false,
        }))
        break
      case routes.public.privacy:
        setIsVisible((prevState) => ({
          ...prevState,
          contact: false,
          career: false,
          privacy: true,
          terms: false,
          cookies: false,
        }))
        break
      case routes.public.cookies:
        setIsVisible((prevState) => ({
          ...prevState,
          contact: false,
          career: false,
          privacy: false,
          terms: false,
          cookies: true,
        }))
        break
      case routes.public.career(dynamicPath):
        setIsVisible((prevState) => ({
          ...prevState,
          career: true,
          contact: false,
          privacy: false,
          terms: false,
          cookies: false,
        }))
        break
      default:
        setIsVisible((prevState) => ({
          ...prevState,
          contact: false,
          career: false,
          privacy: false,
          terms: false,
          cookies: false,
        }))
    }
  }, [pathname])

  const is404 = useMemo(() => router.route === '/404', [router.route])

  useEffect(() => {
    router.beforePopState((state) => {
      state.options.scroll = false
      return true
    })
  }, [])

  return (
    <>
      {width > breakpointTablet && <CustomCursor />}
      <ReactLenis root options={{ ...options }}>
        {!isVisible.contact &&
          !isVisible.privacy &&
          !isVisible.terms &&
          !isVisible.cookies &&
          !is404 && <Header />}
        {width <= breakpointMob && <MobileCTA />}
        {!isVisible.career &&
          !isVisible.privacy &&
          !isVisible.terms &&
          !isVisible.cookies &&
          !is404 &&
          width <= breakpointMob && <MobileHeader />}
        {children}
      </ReactLenis>
    </>
  )
}

export default AppLayout
