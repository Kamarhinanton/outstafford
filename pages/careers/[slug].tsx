import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import { CareerContent } from '@/modules/Career'
import fs from 'fs'
import { careersDirectory } from '@/utils/variables'
import matter from 'gray-matter'
import path from 'path'
import { FrontMatterType } from '@/utils/globalTypes'

export type SingleCareerType = {
  content: string
  frontMatter: FrontMatterType
}

export default function Career({ frontMatter, content }: SingleCareerType) {
  return (
    <>
      <Head>
        <title>Career page</title>
      </Head>
      <PageTransitionLayout
        title={frontMatter.title ? frontMatter.title : ''}
        description={frontMatter.salary ? frontMatter.salary : ''}
      >
        <CareerContent frontMatter={frontMatter} content={content} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticPaths = async () => {
  try {
    const files = fs.readdirSync(careersDirectory)

    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.md', ''),
      },
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
    const fullPath = path.join(careersDirectory, `${slug}.md`)

    const readFile = fs.readFileSync(fullPath, 'utf-8')
    const { data: frontMatter, content } = matter(readFile)

    return {
      props: {
        frontMatter,
        content,
      },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
