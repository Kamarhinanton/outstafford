import React, { FC, useEffect } from 'react'
import Container from '@/app/layouts/Container'
import BodyForm from '@/modules/Career/ui/PopUpCareer/BodyForm/BodyForm'
import classNames from 'classnames'
import TopicList from '@/ui/TopicList/TopicList'
import CloseCross from '@/ui/CloseCross/CloseCross'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { setIsCareerPopUpActive } from '@/store/reducers/callCareerPopUpSlice'
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import { popUpVariant } from '@/modules/Home/ui/PartnerReviews/VideoPopUp/VideoPopUp'
import { setIsPopUpActive } from '@/store/reducers/callPopUpSlice'
import { SingleCareerResultType } from '@/utils/globalTypes'

import styles from './PopUpCareer.module.scss'

const PopUpCareer: FC<SingleCareerResultType> = ({ career }) => {
  const isCareerPopUpActive = useSelector(
    (state: RootState) => state.callCareerPopUp.isCareerPopUpActive,
  )
  const dispatch: AppDispatch = useDispatch()
  const handlePopUpCareer = () => {
    document.body.style.overflow = ''
    dispatch(setIsCareerPopUpActive(false))
    dispatch(setIsPopUpActive(false))
  }

  useEffect(() => {
    return () => {
      dispatch(setIsPopUpActive(false))
      dispatch(setIsCareerPopUpActive(false))
    }
  }, [])

  return (
    <AnimatePresence>
      {isCareerPopUpActive && (
        <LazyMotion features={domAnimation}>
          <m.div {...popUpVariant} className={styles['pop-up-career']}>
            <Container>
              <div className={styles['pop-up-career__content']}>
                <div className={styles['description']}>
                  <h2
                    className={classNames('h2', styles['description__title'])}
                  >
                    Apply to {career.title}
                  </h2>
                  <p className={styles['description__text']}>{career.about}</p>
                  {career.topics && (
                    <TopicList
                      className={styles['description__list']}
                      list={career.topics}
                      variants={'x-large'}
                    />
                  )}
                </div>
                <BodyForm />
                <CloseCross
                  callBackFunc={handlePopUpCareer}
                  className={styles['cross']}
                />
              </div>
            </Container>
          </m.div>
        </LazyMotion>
      )}
    </AnimatePresence>
  )
}

export default PopUpCareer
