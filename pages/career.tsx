import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import { CareerContent } from '@/modules/Career'

export default function Career() {
  return (
    <>
      <Head>
        <title>Career page</title>
      </Head>
      <PageTransitionLayout
        title={'Career text'}
        description={'career description'}
      >
        <CareerContent />
      </PageTransitionLayout>
    </>
  )
}
