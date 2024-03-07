import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { ProjectsContent } from '@/modules/Projects'
import Head from 'next/head'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects page</title>
      </Head>
      <PageTransitionLayout
        title={'Projects text'}
        description={'projects description'}
      >
        <ProjectsContent />
      </PageTransitionLayout>
    </>
  )
}
