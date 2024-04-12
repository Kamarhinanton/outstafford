import React from 'react'
import Footer from '@/components/Footer/Footer'
import Editor from '@/modules/Career/ui/Editor/Editor'
import { SingleMarkdownType } from '@/utils/globalTypes'
import dynamic from 'next/dynamic'

const PopUp = dynamic(
  () => import('@/modules/Career/ui/PopUpCareer/PopUpCareer'),
)

const CareerContent = ({ frontMatter, content }: SingleMarkdownType) => {
  return (
    <main>
      <PopUp frontMatter={frontMatter} />
      <Editor frontMatter={frontMatter} content={content} />
      <Footer />
    </main>
  )
}

export default CareerContent
