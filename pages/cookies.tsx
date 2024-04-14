import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import Container from '@/app/layouts/Container'
import Link from 'next/link'
import BackButton from '@/ui/BackButton/BackButton'
import { useRouter } from 'next/router'

export default function Cookies() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Cookies page</title>
      </Head>
      <PageTransitionLayout
        title={'Cookies text'}
        description={'cookies description'}
      >
        <Container>
          <div className={'editor-content wrapper-class'}>
            <BackButton callBackFunc={() => router.back()} />
            <h1>
              This is cookies <span>page</span>
            </h1>
            <h2>
              H2 <span>Lorem</span>
            </h2>
            <h3>
              H3 <span>Lorem</span>
            </h3>
            <h4>
              h4 <span>Lorem</span>
            </h4>
            <h5>
              H5 <span>Lorem</span>
            </h5>
            <h6>
              H6 <span>Lorem</span>
            </h6>
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem <Link href={'/'}>Lorem</Link> Lorem
            </p>
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
            <ol>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ol>
          </div>
        </Container>
      </PageTransitionLayout>
    </>
  )
}
