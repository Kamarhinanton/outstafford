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
          <h1>
            <span>Outstafford</span>
          </h1>
          <BackgroundImage
            className={styles['logo']}
            src={'/images/logo.png'}
            alt={'logo'}
          />
          <h2>
            We’re a full-cycle design and development team. We build complex
            <span>mobile apps</span> and progressive <span>web apps</span> with{' '}
            <span>AI integrations</span>.
          </h2>
        </div>
      </Container>
    </section>
  )
}

export default AboutHero
