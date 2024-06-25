import React from 'react'
import HeroInnerBlog from '@/modules/BlogInner/ui/HeroInnerBlog/HeroInnerBlog'
import BlogEditor from '@/modules/BlogInner/ui/BlogEditor/BlogEditor'
import BigTitle from '@/modules/BlogInner/ui/BigTitle/BigTitle'
import dynamic from 'next/dynamic'
import { OneBlogResultType } from '../../../../pages/blog/[slug]'

const IndustriesDynamic = dynamic(
  () => import('@/components/Industries/Industries'),
)

const BlogInnerContent = ({ blog }: OneBlogResultType) => {
  return (
    <main className={'wrapper-class'}>
      <HeroInnerBlog blog={blog} />
      <BlogEditor editor={blog.editor} />
      <BigTitle />
      <IndustriesDynamic innerVariant={true} />
    </main>
  )
}

export default BlogInnerContent
