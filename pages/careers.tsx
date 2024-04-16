import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { CareersContent } from '@/modules/Careers'
import Head from 'next/head'
import { MarkdownType } from '@/utils/globalTypes'
import { careersDirectory } from '@/utils/variables'
import { getMarkdownContent } from '@/utils/markdown/getMarkdownContent'

export type CareersType = {
  careers: MarkdownType[]
}

export default function Careers({ careers }: CareersType) {
  return (
    <>
      <Head>
        <title>Careers page</title>
      </Head>
      <PageTransitionLayout description={'EXPLORE OPEN POSITION'}>
        <CareersContent careers={careers} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const careers = getMarkdownContent(careersDirectory)
    return {
      props: { careers },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
