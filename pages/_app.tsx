// import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import localFont from 'next/font/local'

const grtskTera = localFont({
  src: [
    {
      path: '../public/fonts/grtsk-tera-8.woff',
      weight: '700',
    },
    {
      path: '../public/fonts/grtsk-tera-8.woff2',
      weight: '700',
    },
  ],
})

const matter = localFont({
  src: [
    {
      path: '../public/fonts/Matter-Regular.woff',
      weight: '400',
    },
    {
      path: '../public/fonts/Matter-Regular.woff2',
      weight: '400',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </>
  )
}
