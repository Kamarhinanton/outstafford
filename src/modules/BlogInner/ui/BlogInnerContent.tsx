import React from 'react'
import HeroInnerBlog from '@/modules/BlogInner/ui/HeroInnerBlog/HeroInnerBlog'
import BlogEditor from '@/modules/BlogInner/ui/BlogEditor/BlogEditor'
import dynamic from 'next/dynamic'
import { BlogsTransformType, SingleBlogResultType } from '@/utils/globalTypes'

const IndustriesDynamic = dynamic(
  () => import('@/components/Industries/Industries'),
)

const BlogInnerContent = ({
  blog,
  blogs,
}: {
  blog: SingleBlogResultType
  blogs: BlogsTransformType[]
}) => {
  return (
    <main className={'wrapper-class'}>
      <HeroInnerBlog blog={blog} />
      <BlogEditor editor={blog.editor} />
      <IndustriesDynamic innerVariant={true} blogs={blogs} />
    </main>
  )
}

export default BlogInnerContent
