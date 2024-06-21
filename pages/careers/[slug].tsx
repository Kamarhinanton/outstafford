import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import { CareerContent } from '@/modules/Career'
import createApolloClient from '@/utils/api/apolloClient'
import { gql } from '@apollo/client'
import { TopicCareerType } from '../careers'

export type OneCareerResultType = {
  career: {
    id: string | number
    title: string
    salary: string
    about: string
    description: string
    editor: string
    topics: string[]
  }
}

type OneCareerPathType = {
  id: string
}

type QueryResultPathType = {
  positions: {
    data: OneCareerPathType[]
  }
}

type OneCareerType = {
  id: string
  attributes: {
    title: string | number
    salary: string
    about: string
    description: string
    editor: string
    topics: {
      data: TopicCareerType[]
    }
  }
}

type QueryResultType = {
  position: {
    data: OneCareerType
  }
}

type SlugProps = {
  params: {
    slug: string
  }
}

export default function Career({ career }: OneCareerResultType) {
  return (
    <>
      <Head>
        <title>{career.title}</title>
      </Head>
      <PageTransitionLayout title={career.title}>
        <CareerContent career={career} />
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
          positions {
            data {
              id
            }
          }
        }
      `,
    })
    const paths = data.positions.data.map((slug) => ({
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

export const getStaticProps = async ({ params }: SlugProps) => {
  try {
    const { slug } = params
    const client = createApolloClient()
    const { data } = await client.query<QueryResultType>({
      query: gql`
        query {
          position(id: ${slug}) {
            data {
              id
              attributes {
                title
                salary
                about
                description
                editor
                topics: position_topics {
                  data {
                    id
                    attributes {
                      topic
                    }
                  }
                }
              }
            }
          }
        }
      `,
    })

    const position = data.position.data
    const career = {
      id: position.id,
      title: position.attributes.title,
      salary: position.attributes.salary,
      about: position.attributes.about,
      description: position.attributes.description,
      editor: position.attributes.editor,
      topics: position.attributes.topics.data.map(
        (topic) => topic.attributes.topic,
      ),
    }

    return {
      props: {
        career,
      },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
