import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import { BlogInnerContent } from '@/modules/BlogInner'

export default function BlogInner() {
  return (
    <>
      <Head>
        <title>Blog inner page</title>
      </Head>
      <PageTransitionLayout
        title={'Blog inner text'}
        description={'blog inner description'}
      >
        <BlogInnerContent />
      </PageTransitionLayout>
    </>
  )
}
