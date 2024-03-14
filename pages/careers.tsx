import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { CareersContent } from '@/modules/Careers'
import Head from 'next/head'

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers page</title>
      </Head>
      <PageTransitionLayout
        title={'Careers text'}
        description={'careers description'}
      >
        <CareersContent />
      </PageTransitionLayout>
    </>
  )
}
