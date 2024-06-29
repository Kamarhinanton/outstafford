import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { ProjectsContent } from '@/modules/Projects'
import Head from 'next/head'
import createApolloClient from '@/utils/api/apolloClient'
import { PROJECTS_ALL } from '@/utils/api/apolloQueries'
import { ProjectsType, QueryResultProjectsType } from '@/utils/globalTypes'

export default function Projects({ projects, projectTopics }: ProjectsType) {
  return (
    <>
      <Head>
        <title>Our Projects – Outstafford</title>
      </Head>
      <PageTransitionLayout description={'OUR BEST PROJECTS'}>
        <ProjectsContent projects={projects} projectTopics={projectTopics} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const client = createApolloClient()
    const { data } = await client.query<QueryResultProjectsType>({
      query: PROJECTS_ALL,
    })

    const projects = data.projects.data.map(({ id, attributes }) => {
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

    const projectTopics = data.projectTopics.data.map(({ id, attributes }) => {
      return {
        id: id,
        topic: attributes.topic,
      }
    })

    return {
      props: { projects, projectTopics },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
