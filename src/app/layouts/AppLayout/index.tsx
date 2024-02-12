import { FC, ReactNode } from 'react'
import { Header } from '@/components/Header'

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default AppLayout
