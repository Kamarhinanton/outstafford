import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { BlogContent } from '@/modules/Blog'
import Head from 'next/head'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog page</title>
      </Head>
      <PageTransitionLayout
        title={'Blog text'}
        description={'blog description'}
      >
        <BlogContent />
      </PageTransitionLayout>
    </>
  )
}
