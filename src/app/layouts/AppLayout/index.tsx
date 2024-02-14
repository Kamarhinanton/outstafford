import { FC, ReactNode } from 'react'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import dynamic from 'next/dynamic'

const MobileCTA = dynamic(
  () => import('@/components/HeaderMobileCTA/HeaderMobileCTA'),
  {
    ssr: false,
  },
)

const DesktopHeader = dynamic(() => import('@/components/Header/ui/Header'), {
  ssr: false,
})

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const { width } = useWindowDimensions()

  return (
    <>
      {width > breakpointMob && <DesktopHeader />}
      {width <= breakpointMob && <MobileCTA />}
      {children}
    </>
  )
}

export default AppLayout
