import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import { CareerContent } from '@/modules/Career'
import { careersDirectory } from '@/utils/variables'
import { SingleMarkdownType } from '@/utils/globalTypes'
import { staticPath } from '@/utils/staticPath/staticPath'
import { getMarkdownInner } from '@/utils/markdown/getMarkdownInner'

export default function Career({ frontMatter, content }: SingleMarkdownType) {
  return (
    <>
      <Head>
        <title>Career page</title>
      </Head>
      <PageTransitionLayout
        title={frontMatter.title ? frontMatter.title : ''}
        description={frontMatter.salary ? frontMatter.salary : ''}
      >
        <CareerContent frontMatter={frontMatter} content={content} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticPaths = async () => {
  try {
    const paths = staticPath(careersDirectory)

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
    const [frontMatter, content] = getMarkdownInner(slug, careersDirectory)

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
