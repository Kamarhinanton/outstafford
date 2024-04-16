import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { AboutContent } from '@/modules/About'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <PageTransitionLayout description={'ABOUT OUR TEAM'}>
        <AboutContent />
      </PageTransitionLayout>
    </>
  )
}
