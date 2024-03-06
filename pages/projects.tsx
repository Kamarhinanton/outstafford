import React from 'react'
import Container from '@/app/layouts/Container'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'

export default function Projects() {
  return (
    <Container>
      <PageTransitionLayout
        title={'Projects text'}
        description={'projects description'}
      >
        <h1>Projects page</h1>
      </PageTransitionLayout>
    </Container>
  )
}
