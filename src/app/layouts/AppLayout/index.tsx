import { FC, ReactNode } from 'react'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'

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

  return (
    <>
      <Header />
      {width <= breakpointMob && <MobileCTA />}
      {width <= breakpointMob && <MobileHeader />}
      {children}
    </>
  )
}

export default AppLayout
