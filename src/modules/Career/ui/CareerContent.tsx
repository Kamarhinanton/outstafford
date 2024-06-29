import React from 'react'
import Footer from '@/components/Footer/Footer'
import Editor from '@/modules/Career/ui/Editor/Editor'
import dynamic from 'next/dynamic'
import { SingleCareerResultType } from '@/utils/globalTypes'

const PopUp = dynamic(
  () => import('@/modules/Career/ui/PopUpCareer/PopUpCareer'),
)

const CareerContent = ({ career }: SingleCareerResultType) => {
  return (
    <main>
      <PopUp career={career} />
      <Editor career={career} />
      <Footer />
    </main>
  )
}

export default CareerContent
