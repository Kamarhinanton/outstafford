import React from 'react'
import HeroInnerBlog from '@/modules/BlogInner/ui/HeroInnerBlog/HeroInnerBlog'
import { SingleMarkdownType } from '@/utils/globalTypes'
import BlogEditor from '@/modules/BlogInner/ui/BlogEditor/BlogEditor'
import BigTitle from '@/modules/BlogInner/ui/BigTitle/BigTitle'
import dynamic from 'next/dynamic'

const IndustriesDynamic = dynamic(
  () => import('@/components/Industries/Industries'),
)

const BlogInnerContent = ({ frontMatter, content }: SingleMarkdownType) => {
  return (
    <main className={'wrapper-class'}>
      <HeroInnerBlog frontMatter={frontMatter} />
      <BlogEditor content={content} />
      <BigTitle />
      <IndustriesDynamic innerVariant={true} />
    </main>
  )
}

export default BlogInnerContent
