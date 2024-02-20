import Head from 'next/head'
import { HomeContent } from '@/modules/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <HomeContent />
    </>
  )
}
