import { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
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
        }))
        break
      case routes.public.career(dynamicPath):
        setIsVisible((prevState) => ({
          ...prevState,
          career: true,
          contact: false,
        }))
        break
      default:
        setIsVisible((prevState) => ({
          ...prevState,
          contact: false,
          career: false,
        }))
    }
  }, [pathname])

  return (
    <>
      <ReactLenis root options={{ ...options }}>
        {!isVisible.contact && <Header />}
        {width <= breakpointMob && <MobileCTA />}
        {!isVisible.career && width <= breakpointMob && <MobileHeader />}
        {children}
      </ReactLenis>
    </>
  )
}

export default AppLayout
