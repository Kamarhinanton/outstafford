import { FC, ReactNode, useEffect, useState } from 'react'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { usePathname } from 'next/navigation'
import routes from '@/utils/routes'

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
  })

  useEffect(() => {
    switch (pathname) {
      case routes.public.contact:
        setIsVisible((prevState) => ({ ...prevState, contact: true }))
        break
      default:
        setIsVisible((prevState) => ({
          ...prevState,
          contact: false,
        }))
    }
  }, [pathname])

  return (
    <>
      {!isVisible.contact && <Header />}
      {width <= breakpointMob && <MobileCTA />}
      {width <= breakpointMob && <MobileHeader />}
      {children}
    </>
  )
}

export default AppLayout
