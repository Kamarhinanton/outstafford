import React from 'react'
import Container from '@/app/layouts/Container'
import Link from 'next/link'

import styles from './OurPortfolio.module.scss'
import classNames from 'classnames'
const OurPortfolio = () => {
  return (
    <section className={styles['our-portfolio']}>
      <Container size={'small'}>
        <div className={styles['our-portfolio__content']}>
          <Link className={styles['our-portfolio__content_link']} href={'/'}>
            <h2 className={classNames(styles['title'], 'h2')}>
              Explore our Projects
            </h2>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default OurPortfolio
