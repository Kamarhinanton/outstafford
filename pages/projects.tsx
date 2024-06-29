import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { ProjectsContent } from '@/modules/Projects'
import Head from 'next/head'
import { CardBlogType } from '@/utils/globalTypes'
import createApolloClient from '@/utils/api/apolloClient'
import { gql } from '@apollo/client'
import { TopicType } from './careers'

export type ProjectPageType = {
  projects: CardBlogType[]
  projectTopics: {
    id: string
    topic: string
  }[]
}

type QueryResultType = {
  projects: {
    data: OneProjectType[]
  }
  projectTopics: {
    data: TopicType[]
  }
}

type OneProjectType = {
  id: string
  attributes: {
    hero: {
      title: string
    }
    project_topics: {
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

export default function Projects({ projects, projectTopics }: ProjectPageType) {
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
    const { data } = await client.query<QueryResultType>({
      query: gql`
        query {
          projectTopics {
            data {
              id
              attributes {
                topic
              }
            }
          }
          projects {
            data {
              id
              attributes {
                hero {
                  title
                }
                preview {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                project_topics {
                  data {
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

    const projects = data.projects.data.map((project) => {
      {
        return {
          preview: project.attributes.preview.data.attributes.url,
          topics: project.attributes.project_topics.data.map(
            (topic) => topic.attributes.topic,
          ),
          title: project.attributes.hero.title,
          href: project.id,
        }
      }
    })

    const projectTopics = data.projectTopics.data.map((topic) => {
      return {
        id: topic.id,
        topic: topic.attributes.topic,
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
