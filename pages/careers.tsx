import React from 'react'
import Container from '@/app/layouts/Container'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'

export default function Careers() {
  return (
    <Container>
      <PageTransitionLayout
        title={'Careers text'}
        description={'careers description'}
      >
        <h1>Careers page</h1>
      </PageTransitionLayout>
    </Container>
  )
}
