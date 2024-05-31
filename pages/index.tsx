import Head from 'next/head'
import { HomeContent } from '@/modules/Home'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Outstafford – MVP Development Company</title>
      </Head>
      <PageTransitionLayout description={'WE LOVE STARTUPS'}>
        <HomeContent />
      </PageTransitionLayout>
    </>
  )
}
