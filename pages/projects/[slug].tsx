import React from 'react'
import Head from 'next/head'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { CaseContent } from '@/modules/Case'
import createApolloClient from '@/utils/api/apolloClient'
import {
  OneProjectType,
  QueryResultPathType,
  QueryResultProjectType,
} from '@/utils/globalTypes'
import { PROJECT_PATH, PROJECTS_PATH } from '@/utils/api/apolloQueries'

export default function Case({ project }: { project: OneProjectType }) {
  const { hero } = project.attributes
  return (
    <>
      <Head>
        <title>{hero.title}</title>
      </Head>
      <PageTransitionLayout
        description={`${hero.title?.toUpperCase()} CASE STUDY`}
      >
        <CaseContent project={project} />
      </PageTransitionLayout>
    </>
  )
}
export const getStaticPaths = async () => {
  try {
    const client = createApolloClient()
    const { data } = await client.query<QueryResultPathType>({
      query: PROJECTS_PATH,
    })
    const paths = data.projects.data.map((slug) => ({
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
    const { data } = await client.query<QueryResultProjectType>({
      query: PROJECT_PATH,
      variables: { id: slug },
    })

    const project = data.project.data
    return {
      props: { project },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
