import React from 'react'
import Industries from '@/modules/Blog/ui/Industries/Industries'
import HeroInnerBlog from '@/modules/BlogInner/ui/HeroInnerBlog/HeroInnerBlog'

const BlogInnerContent = () => {
  return (
    <main>
      <HeroInnerBlog />
      <Industries innerVariant={true} />
    </main>
  )
}

export default BlogInnerContent
