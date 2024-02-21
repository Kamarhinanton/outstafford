import type { AppProps } from 'next/app'
import Head from 'next/head'
import AppLayout from '@/app/layouts/AppLayout'
import localFont from 'next/font/local'
import { Provider } from 'react-redux'
import store from '@/store/store'
import { MainPreloader } from '@/components/MainPreloader'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import dynamic from 'next/dynamic'

import '@/app/styles/index.scss'

const grtskTera = localFont({
  src: [
    {
      path: '../public/fonts/grtsk-tera-8.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/grtsk-tera-8.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  preload: true,
  display: 'swap',
})

const matter = localFont({
  src: [
    {
      path: '../public/fonts/Matter-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Matter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  preload: true,
  display: 'swap',
})

const MouseIndicator = dynamic(
  () => import('@/components/MouseIndicatorScroll/ui/MouseIndicatorScroll'),
  {
    ssr: false,
  },
)

export default function App({ Component, pageProps }: AppProps) {
  const { width } = useWindowDimensions()

  return (
    <>
      <style jsx global>{`
        :root {
          --font-family-primary: ${grtskTera.style.fontFamily};
          --font-family-secondary: ${matter.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Provider store={store}>
        <AppLayout>
          <MainPreloader />
          {width > breakpointMob && <MouseIndicator />}
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </>
  )
}
