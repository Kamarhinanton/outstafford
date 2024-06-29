import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { CareersContent } from '@/modules/Careers'
import Head from 'next/head'
import createApolloClient from '@/utils/api/apolloClient'
import { CAREERS_ALL } from '@/utils/api/apolloQueries'
import { CareersType, QueryResultCareersType } from '@/utils/globalTypes'

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
    const { data } = await client.query<QueryResultCareersType>({
      query: CAREERS_ALL,
    })
    const careers = data.positions.data.map(({ attributes, id }) => ({
      id: id,
      title: attributes.title,
      topics: attributes.topics.data.map((topic) => topic.attributes.topic),
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
