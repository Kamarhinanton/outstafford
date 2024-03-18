import React from 'react'
import Footer from '@/components/Footer/Footer'
import Editor from '@/modules/Career/ui/Editor/Editor'
import PopUpCareer from '@/modules/Career/ui/PopUpCareer/PopUpCareer'

const CareerContent = () => {
  return (
    <main>
      <PopUpCareer />
      <Editor />
      <Footer />
    </main>
  )
}

export default CareerContent
