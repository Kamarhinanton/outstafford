import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import { CareerContent } from '@/modules/Career'
import createApolloClient from '@/utils/api/apolloClient'
import { CAREER_SINGLE, CAREERS_PATH } from '@/utils/api/apolloQueries'
import {
  QueryResultCareerPathType,
  QueryResultCareerType,
  SingleCareerResultType,
} from '@/utils/globalTypes'

export default function Career({ career }: SingleCareerResultType) {
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
    const { data } = await client.query<QueryResultCareerPathType>({
      query: CAREERS_PATH,
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

type SlugProps = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: SlugProps) => {
  try {
    const { slug } = params
    const client = createApolloClient()
    const { data } = await client.query<QueryResultCareerType>({
      query: CAREER_SINGLE,
      variables: { id: slug },
    })

    const { attributes, id } = data.position.data
    const career = {
      id: id,
      title: attributes.title,
      salary: attributes.salary,
      about: attributes.about,
      description: attributes.description,
      editor: attributes.editor,
      topics: attributes.topics.data.map((topic) => topic.attributes.topic),
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
