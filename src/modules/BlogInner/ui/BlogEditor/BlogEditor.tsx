import React, { FC } from 'react'
import Container from '@/app/layouts/Container'
import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './BlogEditor.module.scss'

type EditorBlogType = {
  editor: BlocksContent
}

const BlogEditor: FC<EditorBlogType> = ({ editor }) => {
  return (
    <section>
      <Container size={'small'} className={styles['width-class']}>
        <div className={'editor-content'}>
          <BlocksRenderer
            content={editor}
            blocks={{
              image: ({ image }) => {
                return (
                  <BackgroundImage
                    className={'image'}
                    src={image.url}
                    alt={'picture'}
                    position={'cover'}
                  />
                )
              },
            }}
          />
        </div>
      </Container>
    </section>
  )
}

export default BlogEditor
