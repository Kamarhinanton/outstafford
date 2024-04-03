import React from 'react'
import Industries from '@/modules/Blog/ui/Industries/Industries'
import HeroInnerBlog from '@/modules/BlogInner/ui/HeroInnerBlog/HeroInnerBlog'
import { SingleMarkdownType } from '@/utils/globalTypes'
import BlogEditor from '@/modules/BlogInner/ui/BlogEditor/BlogEditor'
import BigTitle from '@/modules/BlogInner/ui/BigTitle/BigTitle'

const BlogInnerContent = ({ frontMatter, content }: SingleMarkdownType) => {
  return (
    <main className={'wrapper-class'}>
      <HeroInnerBlog frontMatter={frontMatter} />
      <BlogEditor content={content} />
      <BigTitle />
      <Industries innerVariant={true} />
    </main>
  )
}

export default BlogInnerContent
