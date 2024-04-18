import React, { FC, useEffect, useRef } from 'react'
import Container from '@/app/layouts/Container'
import Logo from '../../../public/icons/logo.svg'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import {
  navigationFooterLinksLeft,
  navigationFooterLinksLeftMob,
  navigationFooterLinksRight,
  socialLinksFooterData,
} from '@/components/Footer/data'
import classNames from 'classnames'
import routes from '@/utils/routes'
import Outstafford from '../../../public/icons/outstafford.svg'
import { useInView } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { setIsFooterVisible } from '@/store/reducers/footerVisibilitySlice'

import styles from './Footer.module.scss'

type FooterPropsType = {
  className?: string
}
const Footer: FC<FooterPropsType> = ({ className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    const handleFooterVisibility = () => {
      if (isInView) {
        dispatch(setIsFooterVisible(true))
      } else {
        dispatch(setIsFooterVisible(false))
      }
    }

    handleFooterVisibility()

    return () => {
      dispatch(setIsFooterVisible(false))
    }
  }, [isInView])

  return (
    <footer ref={ref} className={classNames(styles['footer'], className)}>
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
            <div
              className={classNames(
                styles['right-section__column'],
                styles['mob'],
              )}
            >
              {navigationFooterLinksLeftMob.map((link) => (
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
            <div
              className={classNames(
                styles['right-section__column'],
                styles['desktop'],
              )}
            >
              {navigationFooterLinksLeft.map((link) => (
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
