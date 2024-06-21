import React from 'react'
import Footer from '@/components/Footer/Footer'
import Editor from '@/modules/Career/ui/Editor/Editor'
import dynamic from 'next/dynamic'
import { OneCareerResultType } from '../../../../pages/careers/[slug]'

const PopUp = dynamic(
  () => import('@/modules/Career/ui/PopUpCareer/PopUpCareer'),
)

const CareerContent = ({ career }: OneCareerResultType) => {
  return (
    <main>
      <PopUp career={career} />
      <Editor career={career} />
      <Footer />
    </main>
  )
}

export default CareerContent
