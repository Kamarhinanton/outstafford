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
    name: 'James Peterson',
    position: 'Managing Partner & Founder, Coach',
    href: '/images/man.jpg',
    url: '/',
  },
  {
    id: 2,
    name: 'James Peterson',
    position: 'Managing Partner & Founder, Coach',
    href: '/images/man.jpg',
    url: '/',
  },
  {
    id: 3,
    name: 'James Peterson',
    position: 'Managing Partner & Founder, Coach',
    href: '/images/man.jpg',
    url: '/',
  },
  {
    id: 4,
    name: 'James Peterson',
    position: 'Managing Partner & Founder, Coach',
    href: '/images/man.jpg',
    url: '/',
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
          Is a full-stack design and development team. We build complex mobile
          applications and progressive web applications with AI integrations.
        </p>
        <ul className={styles['team__list']}>
          {data.map((item) => (
            <li className={styles['item']} key={item.id}>
              <BackgroundImage
                className={styles['item__img']}
                src={item.href}
                alt={'picture'}
                position={'cover'}
              />
              <Link className={styles['item__content']} href={item.url}>
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
            </li>
          ))}
        </ul>
        <div className={styles['team__wrapper']}>
          <ButtonPrimary
            className={styles['team__wrapper_btn']}
            size={'large'}
            variant={'green'}
            href={'/'}
          >
            All team members on Linkedin
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}

export default OurTeam
