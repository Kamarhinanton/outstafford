import React from 'react'
import HeroBlog from '@/modules/Blog/ui/HeroBlog/HeroBlog'
import BlogNavigation from '@/components/BlogNavigation/BlogNavigation'
import BlogSection from '@/modules/Blog/ui/BlogSection/BlogSection'
import useCategoryFilter from '@/hooks/useCategoryFilter'
import { blogPageData } from '@/modules/Blog/ui/BlogSection/data'

const categories = [
  'AI & ML',
  'Career',
  'Case Study',
  'UX',
  'UI',
  'Facts',
  'Results',
  'News',
]

const BlogContent = () => {
  const { activeCategories, handleClick, isAll, handleAll, filteredBlogData } =
    useCategoryFilter(blogPageData)
  return (
    <main>
      <HeroBlog />
      <BlogNavigation
        activeCategory={activeCategories}
        handleClick={handleClick}
        isAll={isAll}
        handleAll={handleAll}
        categories={categories}
        smallTopic={true}
      />
      <BlogSection filteredBlogData={filteredBlogData} />
    </main>
  )
}

export default BlogContent
