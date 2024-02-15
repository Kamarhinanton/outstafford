import React from 'react'
import Container from '@/app/layouts/Container'
import Logo from '../../../public/icons/logo.svg'
import { socialLinksData } from '@/components/HeaderMobile/ui/HeaderMobileNavigation/data'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { navigationFooterLinks } from '@/components/Footer/data'

import styles from './Footer.module.scss'
import classNames from 'classnames'
import routes from '@/utils/routes'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <Container>
        <p className={classNames(styles['title'], 'h1')}>Outstafford</p>
        <div className={styles['footer__wrapper']}>
          <div className={styles['left-section']}>
            <Link
              className={styles['left-section__logo']}
              href={routes.public.index}
            >
              <Logo />
            </Link>
            <div className={styles['left-section__content']}>
              <p className={styles['top-text']}>It’s all about the team</p>
              <p className={styles['bottom-text']}>© Outstafford 2024</p>
              <nav className={styles['social']}>
                {socialLinksData.map((social) => (
                  <Link
                    className={styles['social__link']}
                    key={social.src}
                    href={social.href}
                  >
                    <BackgroundImage
                      contain
                      src={social.src}
                      alt={social.link}
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <nav className={styles['right-section']}>
            {navigationFooterLinks.map((link) => (
              <Link
                className={styles['right-section__link']}
                key={link.description}
                href={link.href}
              >
                {link.description}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
