import React from 'react'
import Container from '@/app/layouts/Container'
import BodyForm from '@/modules/Career/ui/PopUpCareer/BodyForm/BodyForm'
import classNames from 'classnames'
import TopicList from '@/ui/TopicList/TopicList'
import CloseCross from '@/ui/CloseCross/CloseCross'

import styles from './PopUpCareer.module.scss'

const PopUpCareer = () => {
  return (
    <div className={styles['pop-up-career']}>
      <Container>
        <div className={styles['pop-up-career__content']}>
          <div className={styles['description']}>
            <h2 className={classNames('h2', styles['description__title'])}>
              Apply to UX/Ui Designer
            </h2>
            <p className={styles['description__text']}>
              We are looking for a UX/UI Designer to work on the next generation
              of digital commerce, apps and sites combining brand, design and
              business.
            </p>
            <TopicList
              className={styles['description__list']}
              list={['Remote', 'Full-time']}
            />
          </div>
          <BodyForm />
          <CloseCross className={styles['cross']} />
        </div>
      </Container>
    </div>
  )
}

export default PopUpCareer
