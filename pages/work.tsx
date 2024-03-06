import React from 'react'
import Container from '@/app/layouts/Container'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'

export default function Work() {
  return (
    <Container>
      <PageTransitionLayout
        title={'We work text'}
        description={'we work description'}
      >
        <h1>How we work page</h1>
      </PageTransitionLayout>
    </Container>
  )
}
