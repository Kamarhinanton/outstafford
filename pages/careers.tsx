import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { CareersContent } from '@/modules/Careers'
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import { CareersType } from '@/utils/globalTypes'
import path from 'path'
import { careersDirectory } from '@/utils/variables'

export default function Careers({ careers }: CareersType) {
  return (
    <>
      <Head>
        <title>Careers page</title>
      </Head>
      <PageTransitionLayout
        title={'Careers text'}
        description={'careers description'}
      >
        <CareersContent careers={careers} />
      </PageTransitionLayout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const files = fs.readdirSync(careersDirectory)

    const careers = files.map((fileName) => {
      const slug = fileName.replace('.md', '')
      const fullPath = path.join(careersDirectory, fileName)

      const readFile = fs.readFileSync(fullPath, 'utf-8')
      const { data: frontMatter } = matter(readFile)

      return {
        slug,
        frontMatter,
      }
    })

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
