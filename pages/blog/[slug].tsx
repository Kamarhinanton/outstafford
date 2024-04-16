import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import { BlogInnerContent } from '@/modules/BlogInner'
import { staticPath } from '@/utils/staticPath/staticPath'
import { blogDirectory } from '@/utils/variables'
import { getMarkdownInner } from '@/utils/markdown/getMarkdownInner'
import { SingleMarkdownType } from '@/utils/globalTypes'

export default function BlogInner({
  frontMatter,
  content,
}: SingleMarkdownType) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <PageTransitionLayout title={frontMatter.title}>
        <BlogInnerContent frontMatter={frontMatter} content={content} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticPaths = async () => {
  try {
    const paths = staticPath(blogDirectory)

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
    const [frontMatter, content] = getMarkdownInner(slug, blogDirectory)

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
