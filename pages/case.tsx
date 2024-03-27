import React from 'react'
import Head from 'next/head'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { CaseContent } from '@/modules/Case'

export default function Case() {
  return (
    <>
      <Head>
        <title>Case page</title>
      </Head>
      <PageTransitionLayout
        title={'Contact text'}
        description={'contact description'}
      >
        <CaseContent />
      </PageTransitionLayout>
    </>
  )
}
