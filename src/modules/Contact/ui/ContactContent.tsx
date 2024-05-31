import React, { useState } from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import BodyForm from '@/modules/Contact/ui/BodyForm/BodyForm'
import dynamic from 'next/dynamic'
import BackButtonVariant from '@/ui/BackButtonVariant/BackButtonVariant'

import styles from './ContactContent.module.scss'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Link from 'next/link'

const Calendly = dynamic(
  () => import('./CalendlyComponent/CalendlyComponent'),
  {
    ssr: false,
  },
)

const ContactContent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <section className={styles['contact']}>
      <Container>
        <div className={styles['contact__content']}>
          <div className={styles['contact__content_column']}>
            <Link
              target="_blank"
              href={'https://t.me/outstafford'}
              className={styles['card']}
            >
              <BackgroundImage
                className={styles['image']}
                src={'/images/telegram_i.svg'}
                alt={'logo'}
                position={'contain'}
              />
              <h3 className={classNames(styles['title'], 'h3')}>
                Send us a message
              </h3>
              <p className={styles['description']}>in Telegram</p>
            </Link>
            <div onClick={handleOpen} className={styles['card']}>
              <BackgroundImage
                className={styles['image']}
                src={'/images/calendly_i.svg'}
                alt={'logo'}
                position={'contain'}
              />
              <h3 className={classNames(styles['title'], 'h3')}>
                Book a сall <br />
                with us
              </h3>
              <p className={styles['description']}>in Calendly</p>
            </div>
          </div>
          <div className={styles['contact__content_column']}>
            <div className={styles['card']}>
              <h3 className={classNames(styles['title'], 'h3')}>
                Tell us about your project
              </h3>
              <BodyForm />
            </div>
          </div>
          <BackButtonVariant className={styles['backward-button']} />
        </div>
      </Container>
      <Calendly isOpen={isOpen} handleClose={handleClose} />
    </section>
  )
}
export default ContactContent
