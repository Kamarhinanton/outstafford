import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { BlogContent } from '@/modules/Blog'
import Head from 'next/head'
import { getMarkdownContent } from '@/utils/markdown/getMarkdownContent'
import { blogDirectory } from '@/utils/variables'
import { CardBlogType } from '@/utils/globalTypes'

export type BlogType = {
  blog: CardBlogType[]
}

export default function Blog({ blog }: BlogType) {
  return (
    <>
      <Head>
        <title>Blog page</title>
      </Head>
      <PageTransitionLayout
        title={'Blog text'}
        description={'blog description'}
      >
        <BlogContent blog={blog} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const data = getMarkdownContent(blogDirectory)
    const blog = data.map((topic) => ({
      ...topic.frontMatter,
      href: topic.slug,
    }))
    return {
      props: { blog },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
