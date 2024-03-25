import React from 'react'
import Footer from '@/components/Footer/Footer'
import Editor from '@/modules/Career/ui/Editor/Editor'
import PopUpCareer from '@/modules/Career/ui/PopUpCareer/PopUpCareer'
import { SingleCareerType } from '@/utils/globalTypes'

const CareerContent = ({ frontMatter, content }: SingleCareerType) => {
  return (
    <main>
      <PopUpCareer frontMatter={frontMatter} />
      <Editor frontMatter={frontMatter} content={content} />
      <Footer />
    </main>
  )
}

export default CareerContent
