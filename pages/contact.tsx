import React from 'react'
import Head from 'next/head'
import { ContactContent } from '@/modules/Contact'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us – Outstafford</title>
      </Head>
      <PageTransitionLayout description={'SAY HI TO.US'}>
        <ContactContent />
      </PageTransitionLayout>
    </>
  )
}
