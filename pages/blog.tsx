import React from 'react'
import Container from '@/app/layouts/Container'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'

export default function Blog() {
  return (
    <Container>
      <PageTransitionLayout
        title={'Blog text'}
        description={'blog description'}
      >
        <h1>Blog page</h1>
      </PageTransitionLayout>
    </Container>
  )
}
