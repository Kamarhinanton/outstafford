import React from 'react'
import Container from '@/app/layouts/Container'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'

export default function About() {
  return (
    <Container>
      <PageTransitionLayout
        title={'About text'}
        description={'about description'}
      >
        <h1>About page</h1>
      </PageTransitionLayout>
    </Container>
  )
}
