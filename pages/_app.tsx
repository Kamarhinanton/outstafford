import type { AppProps } from 'next/app'
import Head from 'next/head'
import AppLayout from '@/app/layouts/AppLayout'
import localFont from 'next/font/local'
import { Provider } from 'react-redux'
import store from '@/store/store'
import { MainPreloader } from '@/components/MainPreloader'

import '@/app/styles/index.scss'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useNextCssRemovalPrevention } from '@madeinhaus/nextjs-page-transition'

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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageKey = router.asPath
  useNextCssRemovalPrevention()

  const onExitComplete = () => {
    history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0 })
  }

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
      <div id="calendly" />
      <Provider store={store}>
        <AppLayout>
          <MainPreloader />
          <AnimatePresence onExitComplete={onExitComplete}>
            <Component {...pageProps} key={pageKey} />
          </AnimatePresence>
        </AppLayout>
      </Provider>
    </>
  )
}
