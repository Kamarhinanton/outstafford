import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import { BlogInnerContent } from '@/modules/BlogInner'
import createApolloClient from '@/utils/api/apolloClient'
import { gql } from '@apollo/client'
import { TopicType } from '../careers'
import { type BlocksContent } from '@strapi/blocks-react-renderer'

export type OneBlogResultType = {
  blog: {
    href: string
    title: string
    preview: string
    description: string | null
    editor: BlocksContent
    topics: string[]
  }
}

type OneBlogPathType = {
  id: string
}

type QueryResultPathType = {
  blogs: {
    data: OneBlogPathType[]
  }
}

type OneBlogType = {
  id: string
  attributes: {
    title: string
    description: string | null
    editor: BlocksContent
    preview: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    topics: {
      data: TopicType[]
    }
  }
}

type QueryResultType = {
  blog: {
    data: OneBlogType
  }
}

export default function BlogInner({ blog }: OneBlogResultType) {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <PageTransitionLayout title={blog.title}>
        <BlogInnerContent blog={blog} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticPaths = async () => {
  try {
    const client = createApolloClient()
    const { data } = await client.query<QueryResultPathType>({
      query: gql`
        query {
          blogs {
            data {
              id
            }
          }
        }
      `,
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
    const { data } = await client.query<QueryResultType>({
      query: gql`
        query {
        blog(id: ${slug}) {
          data {
             id
              attributes{
                title
                description
                editor
                topics: blog_topics {
                  data {
                    id
                    attributes {
                      topic
                    }
                  }
                }
                preview{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
          }
        }
      }
      `,
    })

    const blogInstance = data.blog.data
    const blog = {
      href: blogInstance.id,
      title: blogInstance.attributes.title,
      description: blogInstance.attributes.description,
      editor: blogInstance.attributes.editor,
      preview: blogInstance.attributes.preview.data.attributes.url,
      topics: blogInstance.attributes.topics.data.map(
        (topic) => topic.attributes.topic,
      ),
    }

    return {
      props: {
        blog,
      },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
