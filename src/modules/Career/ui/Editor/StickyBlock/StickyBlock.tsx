import React, { FC } from 'react'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'
import TopicList from '@/ui/TopicList/TopicList'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { setIsCareerPopUpActive } from '@/store/reducers/callCareerPopUpSlice'
import { FrontMatterType } from '@/utils/globalTypes'

import styles from './StickyBlock.module.scss'

type StickyBlockType = {
  className?: string
  frontMatter: FrontMatterType
}
const StickyBlock: FC<StickyBlockType> = ({ className, frontMatter }) => {
  const dispatch: AppDispatch = useDispatch()
  const handlePopUpCareer = () => {
    document.body.style.overflow = 'hidden'
    dispatch(setIsCareerPopUpActive(true))
  }

  return (
    <div className={classNames(styles['sticky-block'], className)}>
      {frontMatter.topics && (
        <TopicList
          className={styles['sticky-block__list']}
          list={frontMatter.topics}
          variants={'x-large'}
        />
      )}
      {frontMatter.about && (
        <div className={styles['sticky-block__text']}>
          <p className={styles['sticky-block__text_title']}>About</p>
          <p className={styles['sticky-block__text_description']}>
            {frontMatter.about}
          </p>
        </div>
      )}
      {frontMatter.salary && (
        <div className={styles['sticky-block__text']}>
          <p className={styles['sticky-block__text_title']}>Salary</p>
          <p className={styles['sticky-block__text_description']}>
            {frontMatter.salary}
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
