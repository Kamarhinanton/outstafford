import React, { FC } from 'react'
import Container from '@/app/layouts/Container'
import Logo from '../../../public/icons/logo.svg'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import {
  navigationFooterLinksLeft,
  navigationFooterLinksRight,
  socialLinksFooterData,
} from '@/components/Footer/data'
import classNames from 'classnames'
import routes from '@/utils/routes'
import Outstafford from '../../../public/icons/outstafford.svg'
import useLenisAnchor, { shouldHandleAnchor } from '@/hooks/useLenisAnchor'
import { useRouter } from 'next/router'

import styles from './Footer.module.scss'

type FooterPropsType = {
  className?: string
}
const Footer: FC<FooterPropsType> = ({ className }) => {
  const { handleAnchor } = useLenisAnchor()
  const router = useRouter()

  return (
    <footer className={classNames(styles['footer'], className)}>
      <Container>
        <div className={classNames(styles['title'], 'h1')}>
          <Outstafford />
        </div>
        <div className={styles['footer__wrapper']}>
          <div className={styles['left-section']}>
            <Link
              scroll={false}
              className={styles['left-section__logo']}
              href={routes.public.index}
            >
              <Logo />
            </Link>
            <div className={styles['left-section__content']}>
              <p className={styles['top-text']}>It’s all about the team</p>
              <p className={styles['bottom-text']}>© Outstafford 2024</p>
              <nav className={styles['social']}>
                {socialLinksFooterData.map((social) => (
                  <Link
                    scroll={false}
                    className={styles['social__link']}
                    key={social.link}
                    href={social.href}
                    target="_blank"
                  >
                    <BackgroundImage
                      position={'contain'}
                      src={social.src}
                      alt={social.link}
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <nav className={styles['right-section']}>
            <div className={classNames(styles['right-section__column'])}>
              {navigationFooterLinksLeft.map((link) => (
                <Link
                  scroll={false}
                  className={styles['right-section__column_link']}
                  key={link.description}
                  href={link.href}
                  onClick={
                    shouldHandleAnchor(router.asPath, link.href)
                      ? (e) => handleAnchor(e, link.href)
                      : undefined
                  }
                >
                  {link.description}
                </Link>
              ))}
            </div>
            <div className={styles['right-section__column']}>
              {navigationFooterLinksRight.map((link) => (
                <Link
                  scroll={false}
                  className={styles['right-section__column_link']}
                  key={link.description}
                  href={link.href}
                >
                  {link.description}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
