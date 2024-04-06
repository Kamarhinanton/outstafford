import React from 'react'
import Container from '@/app/layouts/Container'

import styles from './SmallDescription.module.scss'

const SmallDescription = () => {
  return (
    <section className={styles['description']}>
      <Container size={'small'}>
        <h2>
          <span>Empowering startups.</span> We handle app development and
          support, so you can focus on growing your business.
        </h2>
      </Container>
    </section>
  )
}

export default SmallDescription
