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
                quality={100}
              />
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
