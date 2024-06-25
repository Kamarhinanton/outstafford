import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { CareersContent } from '@/modules/Careers'
import Head from 'next/head'
import createApolloClient from '@/utils/api/apolloClient'
import { gql } from '@apollo/client'

type CareersTransformType = {
  id: string | number
  title: string
  topics: string[]
}

export type TopicType = {
  id: string
  attributes: {
    topic: string
  }
}

type OneCareerType = {
  id: string
  attributes: {
    title: string
    topics: {
      data: TopicType[]
    }
  }
}

type QueryResultType = {
  positions: {
    data: OneCareerType[]
  }
}

export type CareersType = {
  careers: CareersTransformType[]
}

export default function Careers({ careers }: CareersType) {
  return (
    <>
      <Head>
        <title>Join Our Team – Outstafford</title>
      </Head>
      <PageTransitionLayout description={'EXPLORE OPEN POSITION'}>
        <CareersContent careers={careers} />
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
          positions {
            data {
              id
              attributes {
                title
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
    const careers = data.positions.data.map((position) => ({
      id: position.id,
      title: position.attributes.title,
      topics: position.attributes.topics.data.map(
        (topic) => topic.attributes.topic,
      ),
    }))
    return {
      props: { careers },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
