import React from 'react'
import Head from 'next/head'
import { ContactContent } from '@/modules/Contact'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <PageTransitionLayout
        title={'Contact text'}
        description={'contact description'}
      >
        <ContactContent />
      </PageTransitionLayout>
    </>
  )
}
