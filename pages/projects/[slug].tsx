import React from 'react'
import Head from 'next/head'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { CaseContent } from '@/modules/Case'
import { staticPath } from '@/utils/staticPath/staticPath'
import { projectsDirectory } from '@/utils/variables'
import { getMarkdownInner } from '@/utils/markdown/getMarkdownInner'
import { SingleProjectsType } from '@/utils/globalTypes'
import createApolloClient from '@/utils/api/apolloClient'
import { gql } from '@apollo/client'
import { TopicType } from '../careers'

type OneProjectPathType = {
  id: string
}

type QueryResultPathType = {
  projects: {
    data: OneProjectPathType[]
  }
}

export type QueryResultProjectType = {
  project: {
    data: OneProjectType
  }
}

export type ImageUrlType = {
  data: {
    attributes: {
      url: string | null
    }
  }
}

type TechnologiesProjectType = {
  title: string
}

export type HeroProjectType = {
  title: string
  description: string
  preview: ImageUrlType
  link: string
}

export type HeroColumnsProjectType = {
  title: string
  topic: TechnologiesProjectType[]
}

export type ChallengesProjectType = {
  title: string
  list: ChallengesListType[]
}

type ChallengesListType = {
  title: string
  description: string
}

export type ProjectMosaicType = {
  id: string
  title: string | null
  textTop: string | null
  quote: {
    text: string
    author: string
    position: string
    img: ImageUrlType | null
  } | null
  textBottom: string | null
  topImg: ImageUrlType | null
  doubleImg: {
    img1: ImageUrlType
    img2: ImageUrlType
  } | null
  bottomImg: ImageUrlType | null
}

export type SummaryProjectType = {
  title: string
  list: {
    id: string
    title: string | null
    description: string | null
    picture: ImageUrlType | null
  }[]
}

export type TeamProjectType = {
  id: string
  position: string
  name: TeamListType[]
}

type TeamListType = {
  id: string
  title: string
}

export type OneProjectType = {
  id: string
  attributes: {
    project_topics: {
      data: TopicType[]
    }
    hero: HeroProjectType
    hero_columns: HeroColumnsProjectType[]
    challenges: ChallengesProjectType
    mosaic: ProjectMosaicType[]
    summary: SummaryProjectType
    team_title: {
      title: string
    } | null
    team: TeamProjectType[]
  }
}

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
      query: gql`
        query {
          projects {
            data {
              id
            }
          }
        }
      `,
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
      query: gql`
        query {
          project(id: ${slug}) {
            data {
              id
              attributes {
                project_topics {
                  data {
                    id
                    attributes {
                      topic
                    }
                  }
                }
                hero {
                  title
                  description
                  preview {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  link
                }
                hero_columns {
                  ... on ComponentProjectInnerHeroColumn {
                    title
                    topic {
                      title
                    }
                  }
                }
                challenges {
                  title
                  list {
                    title
                    description
                  }
                }
                mosaic {
                  id
                  title
                  textTop
                  quote {
                    text
                    author
                    position
                    img {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  textBottom
                  topImg {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  doubleImg {
                    img1 {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    img2 {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  bottomImg {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                summary {
                  title
                  list {
                    id
                    title
                    description
                    picture {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
                team_title {
                  title
                }
                team {
                  ... on ComponentProjectInnerOurTeam {
                    id
                    position
                    name {
                      id
                      title
                    }
                  }
                }
              }
            }
          }
        }
      `,
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
