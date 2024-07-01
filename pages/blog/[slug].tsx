import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import { BlogInnerContent } from '@/modules/BlogInner'
import createApolloClient from '@/utils/api/apolloClient'
import { BLOG_SINGLE, BLOGS_PATH } from '@/utils/api/apolloQueries'
import {
  BlogsTransformType,
  QueryResultBlogPathType,
  QueryResultBlogType,
  SingleBlogResultType,
} from '@/utils/globalTypes'

export default function BlogInner({
  blog,
  blogs,
}: {
  blog: SingleBlogResultType
  blogs: BlogsTransformType[]
}) {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <PageTransitionLayout title={blog.title}>
        <BlogInnerContent blog={blog} blogs={blogs} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticPaths = async () => {
  try {
    const client = createApolloClient()
    const { data } = await client.query<QueryResultBlogPathType>({
      query: BLOGS_PATH,
    })
    const paths = data.blogs.data.map((slug) => ({
      params: { slug: slug.id },
    }))

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
    const client = createApolloClient()
    const { data } = await client.query<QueryResultBlogType>({
      query: BLOG_SINGLE,
      variables: { id: slug },
    })

    const { id, attributes } = data.blog.data
    const blog = {
      href: id,
      title: attributes.title,
      description: attributes.description,
      editor: attributes.editor,
      link: attributes.link,
      preview: attributes.preview.data.attributes.url,
      topics: attributes.topics.data.map((topic) => topic.attributes.topic),
    }

    const blogs = data.blogs.data
      .filter(({ id }) => id !== slug)
      .map(({ attributes, id }) => ({
        href: id,
        title: attributes.title,
        preview: attributes.preview.data.attributes.url,
        topics: attributes.blog_topics.data.map(
          (topic) => topic.attributes.topic,
        ),
      }))

    return {
      props: {
        blog,
        blogs,
      },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
