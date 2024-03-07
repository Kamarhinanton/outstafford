import React from 'react'
import Container from '@/app/layouts/Container'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { ProjectsContent } from '@/modules/Projects'

export default function Projects() {
  return (
    <Container>
      <PageTransitionLayout
        title={'Projects text'}
        description={'projects description'}
      >
        <ProjectsContent />
      </PageTransitionLayout>
    </Container>
  )
}
