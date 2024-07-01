import React from 'react'
import Head from 'next/head'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { CaseContent } from '@/modules/Case'
import createApolloClient from '@/utils/api/apolloClient'
import {
  CardBlogType,
  ProjectType,
  QueryResultProjectPathType,
  QueryResultProjectType,
} from '@/utils/globalTypes'
import { PROJECT_SINGLE, PROJECTS_PATH } from '@/utils/api/apolloQueries'

export default function Case({
  project,
  projects,
}: {
  project: ProjectType
  projects: CardBlogType[]
}) {
  const { hero } = project.attributes
  return (
    <>
      <Head>
        <title>{hero.title}</title>
      </Head>
      <PageTransitionLayout
        description={`${hero.title?.toUpperCase()} CASE STUDY`}
      >
        <CaseContent project={project} projects={projects} />
      </PageTransitionLayout>
    </>
  )
}
export const getStaticPaths = async () => {
  try {
    const client = createApolloClient()
    const { data } = await client.query<QueryResultProjectPathType>({
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
      query: PROJECT_SINGLE,
      variables: { id: slug },
    })

    const project = data.project.data
    const projects = data.projects.data
      .filter(({ id }) => id !== slug)
      .map(({ id, attributes }) => {
        {
          return {
            preview: attributes.preview.data.attributes.url,
            topics: attributes.project_topics.data.map(
              (topic) => topic.attributes.topic,
            ),
            title: attributes.hero.title,
            href: id,
          }
        }
      })
    return {
      props: { project, projects },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
