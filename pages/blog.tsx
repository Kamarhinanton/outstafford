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
        <title>Our Blog – Outstafford</title>
      </Head>
      <PageTransitionLayout description={'READ OUR BLOG'}>
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
