import React from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import BodyForm from '@/modules/Contact/ui/BodyForm/BodyForm'
import Link from 'next/link'

import styles from './ContactContent.module.scss'

const ContactContent = () => {
  return (
    <section className={styles['contact']}>
      <Container>
        <div className={styles['contact__content']}>
          <div className={styles['contact__content_column']}>
            <div className={styles['card']}>
              <h3 className={classNames(styles['title'], 'h3')}>
                Send us a message
              </h3>
              <p className={styles['description']}>in Telegram</p>
            </div>
            <div className={styles['card']}>
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
          <Link href={'/'} className={styles['backward-button']} />
        </div>
      </Container>
    </section>
  )
}
export default ContactContent