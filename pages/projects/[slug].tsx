import React from 'react'
import Head from 'next/head'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { CaseContent } from '@/modules/Case'
import { staticPath } from '@/utils/staticPath/staticPath'
import { projectsDirectory } from '@/utils/variables'
import { getMarkdownInner } from '@/utils/markdown/getMarkdownInner'
import { SingleProjectsType } from '@/utils/globalTypes'

export default function Case({ frontMatter }: SingleProjectsType) {
  return (
    <>
      <Head>
        <title>Case page</title>
      </Head>
      <PageTransitionLayout
        title={'Case text'}
        description={'case description'}
      >
        <CaseContent frontMatter={frontMatter} />
      </PageTransitionLayout>
    </>
  )
}
export const getStaticPaths = async () => {
  try {
    const paths = staticPath(projectsDirectory)

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (error) {
    console.error(error)

    return {
      paths: [],
      fallback: false,
    }
  }
}

type SlugProps = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: SlugProps) => {
  try {
    const { slug } = params
    const [frontMatter, content] = getMarkdownInner(slug, projectsDirectory)

    return {
      props: {
        frontMatter,
        content,
      },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
