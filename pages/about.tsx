import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { AboutContent } from '@/modules/About'
import Head from 'next/head'
import createApolloClient from '@/utils/api/apolloClient'
import { CardBlogType, QueryResultAboutType } from '@/utils/globalTypes'
import { PROJECTS_ALL_ONLY } from '@/utils/api/apolloQueries'

export default function About({ projects }: { projects: CardBlogType[] }) {
  return (
    <>
      <Head>
        <title>About Outstafford</title>
      </Head>
      <PageTransitionLayout description={'ABOUT OUR TEAM'}>
        <AboutContent projects={projects} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const client = createApolloClient()
    const { data } = await client.query<QueryResultAboutType>({
      query: PROJECTS_ALL_ONLY,
    })

    const projects = data.projects.data.map(({ id, attributes }) => {
      {
        return {
          preview: attributes.preview.data.attributes.url,
          topics: attributes.project_topics.data.map(
            (topic) => topic.attributes.topic,
          ),
          title: attributes.hero.title,
          href: `projects/${id}`,
        }
      }
    })

    return {
      props: { projects },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
