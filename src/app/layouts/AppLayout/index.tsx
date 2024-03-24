import { FC, ReactNode, useEffect, useState } from 'react'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { usePathname } from 'next/navigation'
import routes from '@/utils/routes'
import ReactLenis from '@studio-freight/react-lenis'

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
  const [isVisible, setIsVisible] = useState({
    contact: false,
    career: false,
  })

  const options = {
    duration: 1.5,
    smoothWheel: true,
    smoothTouch: true,
    autoResize: false,
  }

  useEffect(() => {
    switch (pathname) {
      case routes.public.contact:
        setIsVisible((prevState) => ({
          ...prevState,
          contact: true,
          career: false,
        }))
        break
      case routes.public.career:
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
      <ReactLenis root {...options}>
        {!isVisible.contact && <Header />}
        {width <= breakpointMob && <MobileCTA />}
        {!isVisible.career && width <= breakpointMob && <MobileHeader />}
        {children}
      </ReactLenis>
    </>
  )
}

export default AppLayout
