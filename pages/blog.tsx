import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { BlogContent } from '@/modules/Blog'
import Head from 'next/head'
import createApolloClient from '@/utils/api/apolloClient'
import { gql } from '@apollo/client'
import { TopicType } from './careers'

export type BlogsType = {
  blogs: BlogsTransformType[]
  filterTopics: string[]
}

type QueryResultType = {
  blogs: {
    data: OneBlogType[]
  }
  blogTopics: {
    data: TopicType[]
  }
}

type OneBlogType = {
  id: string
  attributes: {
    title: string
    blog_topics: {
      data: TopicType[]
    }
    preview: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}

type BlogsTransformType = {
  href: string
  title: string
  preview: string
  topics: string[]
}

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
    const { data } = await client.query<QueryResultType>({
      query: gql`
        query {
          blogTopics {
            data {
              id
              attributes {
                topic
              }
            }
          }
          blogs {
            data {
              id
              attributes {
                title
                blog_topics {
                  data {
                    id
                    attributes {
                      topic
                    }
                  }
                }
                preview {
                  data {
                    attributes {
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

    const blogs = data.blogs.data.map((blog) => ({
      href: blog.id,
      title: blog.attributes.title,
      preview: blog.attributes.preview.data.attributes.url,
      topics: blog.attributes.blog_topics.data.map(
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
