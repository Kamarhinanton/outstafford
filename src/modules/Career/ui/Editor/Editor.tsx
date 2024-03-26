import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import StickyBlock from '@/modules/Career/ui/Editor/StickyBlock/StickyBlock'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import { setIsCareerPopUpActive } from '@/store/reducers/callCareerPopUpSlice'
import { AppDispatch } from '@/store/store'
import { useDispatch } from 'react-redux'
import BackButton from '@/ui/BackButton/BackButton'
import { useRouter } from 'next/router'
import md from 'markdown-it'
import { SingleMarkdownType } from '@/utils/globalTypes'

import styles from './Editor.module.scss'

const Editor = ({ frontMatter, content }: SingleMarkdownType) => {
  const dispatch: AppDispatch = useDispatch()
  const router = useRouter()
  const handlePopUpCareer = () => {
    document.body.style.overflow = 'hidden'
    dispatch(setIsCareerPopUpActive(true))
  }

  return (
    <section className={styles['editor']}>
      <Container>
        <BackButton
          callBackFunc={() => router.back()}
          className={styles['editor__back']}
        />
        <div className={styles['editor__content']}>
          <div className={styles['article']}>
            <div className={styles['article__top']}>
              <h1 className={classNames('h1', styles['title'])}>
                {frontMatter.title}
              </h1>
              <p className={styles['description']}>{frontMatter.description}</p>
            </div>
            <StickyBlock
              frontMatter={frontMatter}
              className={styles['sticky-block']}
            />
            <div
              dangerouslySetInnerHTML={{ __html: md().render(content) }}
              className={'editor-content'}
            />
          </div>
          <div className={styles['editor__content_menu']}>
            <StickyBlock frontMatter={frontMatter} />
          </div>
        </div>
        <div className={styles['editor__fixed-button']}>
          <ButtonPrimary
            className={styles['editor__fixed-button_btn']}
            arrows={true}
            variant={'green'}
            onClick={handlePopUpCareer}
          >
            Apply
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}

export default Editor
