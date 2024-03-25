import React, { FC } from 'react'
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
import { FrontMatterType } from '@/utils/globalTypes'

import styles from './PopUpCareer.module.scss'

type PopUpCareerType = {
  frontMatter: FrontMatterType
}

const PopUpCareer: FC<PopUpCareerType> = ({ frontMatter }) => {
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
                  Apply to {frontMatter.title}
                </h2>
                <p className={styles['description__text']}>
                  {frontMatter.about}
                </p>
                {frontMatter.topics && (
                  <TopicList
                    className={styles['description__list']}
                    list={frontMatter.topics}
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PopUpCareer
