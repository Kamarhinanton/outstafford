import React from 'react'
import Container from '@/app/layouts/Container'
import md from 'markdown-it'
import styles from './BlogEditor.module.scss'
const BlogEditor = ({ content }: { content: string }) => {
  return (
    <section>
      <Container size={'small'} className={styles['width-class']}>
        <div
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
          className={'editor-content'}
        />
      </Container>
    </section>
  )
}

export default BlogEditor
