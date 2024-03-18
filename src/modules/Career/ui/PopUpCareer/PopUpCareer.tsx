import React from 'react'
import Container from '@/app/layouts/Container'
import BodyForm from '@/modules/Career/ui/PopUpCareer/BodyForm/BodyForm'
import classNames from 'classnames'
import TopicList from '@/ui/TopicList/TopicList'
import CloseCross from '@/ui/CloseCross/CloseCross'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { setIsCareerPopUpActive } from '@/store/reducers/callCareerPopUpSlice'
import { AnimatePresence, motion } from 'framer-motion'
import { popUpVariant } from '@/modules/Home/ui/PartnerReviews/VideoPopUp/VideoPopUp'

import styles from './PopUpCareer.module.scss'

const PopUpCareer = () => {
  const isCareerPopUpActive = useSelector(
    (state: RootState) => state.callCareerPopUp.isCareerPopUpActive,
  )
  const dispatch: AppDispatch = useDispatch()
  const handlePopUpCareer = () => {
    document.body.style.overflow = ''
    dispatch(setIsCareerPopUpActive(false))
  }

  return (
    <AnimatePresence>
      {isCareerPopUpActive && (
        <motion.div {...popUpVariant} className={styles['pop-up-career']}>
          <Container>
            <div className={styles['pop-up-career__content']}>
              <div className={styles['description']}>
                <h2 className={classNames('h2', styles['description__title'])}>
                  Apply to UX/Ui Designer
                </h2>
                <p className={styles['description__text']}>
                  We are looking for a UX/UI Designer to work on the next
                  generation of digital commerce, apps and sites combining
                  brand, design and business.
                </p>
                <TopicList
                  className={styles['description__list']}
                  list={['Remote', 'Full-time']}
                />
              </div>
              <BodyForm />
              <CloseCross
                callBackFunc={handlePopUpCareer}
                className={styles['cross']}
              />
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PopUpCareer
