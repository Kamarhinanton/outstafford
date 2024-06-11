import React from 'react'
import Container from '@/app/layouts/Container'
import Link from 'next/link'
import classNames from 'classnames'
import routes from '@/utils/routes'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import CardTransformPerspective from '@/ui/CardTransformPerspective/CardTransformPerspective'

import styles from './OurPortfolio.module.scss'
const OurPortfolio = () => {
  return (
    <section className={styles['our-portfolio']}>
      <Container className={styles['wrapper']} size={'small'}>
        <Link scroll={false} href={routes.public.projects}>
          <div className={styles['our-portfolio__content']}>
            <CardTransformPerspective
              cursor={false}
              className={styles['our-portfolio__content_wrapper']}
              rotateRangeX={['10deg', '-10deg']}
              rotateRangeY={['-10deg', '10deg']}
            >
              <BackgroundImage
                src={'/images/Projects/MyAI/m-4.jpg'}
                alt={'picture'}
                className={styles['image']}
                position={'cover'}
                quality={100}
              />
              <h2 className={classNames(styles['title'], 'h2')}>
                Explore our Projects
              </h2>
            </CardTransformPerspective>
          </div>
        </Link>
      </Container>
    </section>
  )
}

export default OurPortfolio
