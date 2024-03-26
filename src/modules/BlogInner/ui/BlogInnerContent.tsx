import React from 'react'
import Industries from '@/modules/Blog/ui/Industries/Industries'
import HeroInnerBlog from '@/modules/BlogInner/ui/HeroInnerBlog/HeroInnerBlog'
import { SingleMarkdownType } from '@/utils/globalTypes'
import BlogEditor from '@/modules/BlogInner/ui/BlogEditor/BlogEditor'

const BlogInnerContent = ({ frontMatter, content }: SingleMarkdownType) => {
  return (
    <main>
      <HeroInnerBlog frontMatter={frontMatter} />
      <BlogEditor content={content} />
      <Industries innerVariant={true} />
    </main>
  )
}

export default BlogInnerContent
