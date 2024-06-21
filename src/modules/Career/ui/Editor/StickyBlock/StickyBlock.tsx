import React, { FC } from 'react'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'
import TopicList from '@/ui/TopicList/TopicList'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { setIsCareerPopUpActive } from '@/store/reducers/callCareerPopUpSlice'
import { setIsPopUpActive } from '@/store/reducers/callPopUpSlice'
import { OneCareerResultType } from '../../../../../../pages/careers/[slug]'

import styles from './StickyBlock.module.scss'

type StickyBlockType = {
  className?: string
  career: OneCareerResultType['career']
}
const StickyBlock: FC<StickyBlockType> = ({ className, career }) => {
  const dispatch: AppDispatch = useDispatch()
  const handlePopUpCareer = () => {
    document.body.style.overflow = 'hidden'
    dispatch(setIsCareerPopUpActive(true))
    dispatch(setIsPopUpActive(true))
  }

  return (
    <div className={classNames(styles['sticky-block'], className)}>
      {career.topics && (
        <TopicList
          className={styles['sticky-block__list']}
          list={career.topics}
          variants={'x-large'}
        />
      )}
      {career.about && (
        <div className={styles['sticky-block__text']}>
          <p className={styles['sticky-block__text_title']}>About</p>
          <p className={styles['sticky-block__text_description']}>
            {career.about}
          </p>
        </div>
      )}
      {career.salary && (
        <div className={styles['sticky-block__text']}>
          <p className={styles['sticky-block__text_title']}>Salary</p>
          <p className={styles['sticky-block__text_description']}>
            {career.salary}
          </p>
        </div>
      )}
      <div className={styles['sticky-block__button']}>
        <ButtonPrimary
          className={styles['sticky-block__button_btn']}
          arrows={true}
          variant={'green'}
          onClick={handlePopUpCareer}
        >
          Apply
        </ButtonPrimary>
      </div>
    </div>
  )
}

export default StickyBlock
