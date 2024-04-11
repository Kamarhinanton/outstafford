import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import NotFound from '@/modules/NotFound/NotFound'
import SectionFullPage from '@/app/layouts/SectionFullPage'

export default function Custom404() {
  return (
    <PageTransitionLayout title={'Ups'} description={'something went wrong'}>
      <SectionFullPage>
        <NotFound />
      </SectionFullPage>
    </PageTransitionLayout>
  )
}
