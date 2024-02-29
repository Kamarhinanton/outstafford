import React from 'react'
import Head from 'next/head'
import { ContactContent } from '@/modules/Contact'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <ContactContent />
    </>
  )
}
