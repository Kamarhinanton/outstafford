import { FC, ReactNode } from 'react'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import dynamic from 'next/dynamic'
import Footer from '@/components/Footer/Footer'

const MobileCTA = dynamic(
  () => import('@/components/HeaderMobileCTA/HeaderMobileCTA'),
  {
    ssr: false,
  },
)

const DesktopHeader = dynamic(() => import('@/components/Header/ui/Header'), {
  ssr: false,
})

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

  return (
    <>
      {width > breakpointMob && <DesktopHeader />}
      {width <= breakpointMob && <MobileCTA />}
      {width <= breakpointMob && <MobileHeader />}
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
