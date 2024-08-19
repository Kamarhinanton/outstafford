import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Link from 'next/link'
import Linkedin from '../../../../../public/icons/social/linkedin.svg'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'

import styles from './OurTeam.module.scss'

const data = [
  {
    id: 1,
    name: 'Art Larin',
    position: 'CEO',
    href: '/images/About/ceo.jpg',
    url: 'https://www.linkedin.com/in/artlarin/',
  },
  {
    id: 2,
    name: 'Polina Zubareva',
    position: 'UX/UI Designer',
    href: '/images/About/design.jpg',
    url: 'https://www.linkedin.com/in/polinazubareva/',
  },
  {
    id: 3,
    name: 'Bohdan Startsev',
    position: 'Tech Lead',
    href: '/images/About/bohdan_lead.jpg',
  },
  {
    id: 4,
    name: 'Artur Ohanian',
    position: 'Project Manager',
    href: '/images/About/artur_pm.jpg',
  },
  {
    id: 5,
    name: 'Vlad Rudenko',
    position: 'Full-stack Developer',
    href: '/images/About/vlad_fd.jpg',
  },
  {
    id: 6,
    name: 'Julia Ivaniuk',
    position: 'Project Manager',
    href: '/images/About/julia_pm.jpg',
  },
]

const OurTeam = () => {
  return (
    <section className={styles['team']}>
      <Container size={'small'}>
        <h2 className={classNames('h1', styles['title'])}>
          Our <span>team</span>
        </h2>
        <p className={styles['description']}>
          We based in US, but our team consists of 30 professionals from all
          over the world.
        </p>
        <ul className={styles['team__list']}>
          {data.map((item) => (
            <li className={styles['item']} key={item.id}>
              <BackgroundImage
                className={styles['item__img']}
                src={item.href}
                alt={'picture'}
                position={'cover'}
                quality={100}
                loading="eager"
              />
              {item.url ? (
                <Link
                  scroll={false}
                  className={styles['item__content']}
                  href={item.url}
                  target="_blank"
                >
                  <h4 className={classNames(styles['item__content_title'])}>
                    {item.name}
                  </h4>
                  <p className={styles['item__content_description']}>
                    {item.position}
                  </p>
                  <div className={styles['item__content_social']}>
                    <Linkedin className={styles['icon']} />
                  </div>
                </Link>
              ) : (
                <div className={styles['item__content']}>
                  <h4 className={classNames(styles['item__content_title'])}>
                    {item.name}
                  </h4>
                  <p className={styles['item__content_description']}>
                    {item.position}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className={styles['team__wrapper']}>
          <ButtonPrimary
            className={styles['team__wrapper_btn']}
            size={'large'}
            variant={'green'}
            href={'https://www.linkedin.com/company/outstafford/'}
            target="_blank"
          >
            Follow us on Linkedin
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}

export default OurTeam
