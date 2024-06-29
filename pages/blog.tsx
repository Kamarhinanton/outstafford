import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { BlogContent } from '@/modules/Blog'
import Head from 'next/head'
import createApolloClient from '@/utils/api/apolloClient'
import { BLOGS_ALL } from '@/utils/api/apolloQueries'
import { BlogsType, QueryResultBlogsType } from '@/utils/globalTypes'

export default function Blog({ blogs, filterTopics }: BlogsType) {
  return (
    <>
      <Head>
        <title>Our Blog – Outstafford</title>
      </Head>
      <PageTransitionLayout description={'READ OUR BLOG'}>
        <BlogContent blogs={blogs} filterTopics={filterTopics} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const client = createApolloClient()
    const { data } = await client.query<QueryResultBlogsType>({
      query: BLOGS_ALL,
    })

    const blogs = data.blogs.data.map(({ attributes, id }) => ({
      href: id,
      title: attributes.title,
      preview: attributes.preview.data.attributes.url,
      topics: attributes.blog_topics.data.map(
        (topic) => topic.attributes.topic,
      ),
    }))

    const filterTopics = data.blogTopics.data.map(
      (topic) => topic.attributes.topic,
    )

    return {
      props: { blogs, filterTopics },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
