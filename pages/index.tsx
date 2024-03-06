import Head from 'next/head'
import { HomeContent } from '@/modules/Home'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <PageTransitionLayout
        title={'Home text'}
        description={'home description'}
      >
        <HomeContent />
      </PageTransitionLayout>
    </>
  )
}
