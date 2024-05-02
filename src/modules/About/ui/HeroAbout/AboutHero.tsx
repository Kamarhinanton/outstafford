import React, { useRef } from 'react'
import Container from '@/app/layouts/Container'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import useActiveLinkInView from '@/hooks/useActiveLinkInView'
import routes from '@/utils/routes'

import styles from './AboutHero.module.scss'

const AboutHero = () => {
  const ref = useRef(null)
  useActiveLinkInView({ ref, linkInView: routes.public.about })

  return (
    <section ref={ref} className={styles['about']}>
      <Container>
        <div className={styles['about__content']}>
          <BackgroundImage
            className={styles['about__content_logo']}
            src={'/images/logo.png'}
            alt={'logo'}
          />
          <div className={styles['about__content_text']}>
            <h1>
              <span>Outstafford</span>
            </h1>
            <h2>
              Full-stack design and development
              <br /> team. We build complex
              <span>mobile apps</span>
              <br />
              and progressive <span>web apps</span>
              with
              <span>AI integrations.</span>
            </h2>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutHero
