import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { ProjectsContent } from '@/modules/Projects'
import Head from 'next/head'
import { getMarkdownContent } from '@/utils/markdown/getMarkdownContent'
import { projectsDirectory } from '@/utils/variables'
import { CardBlogType } from '@/utils/globalTypes'

export type ProjectPageType = {
  projects: CardBlogType[]
}

export default function Projects({ projects }: ProjectPageType) {
  return (
    <>
      <Head>
        <title>Projects page</title>
      </Head>
      <PageTransitionLayout description={'OUR BEST PROJECTS'}>
        <ProjectsContent projects={projects} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const data = getMarkdownContent(projectsDirectory)

    const projects = data.map((project) => {
      const { frontMatter, slug } = project
      const { hero, preview } = frontMatter

      return {
        preview: preview,
        topics: hero.topics,
        title: hero.title,
        href: slug,
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
