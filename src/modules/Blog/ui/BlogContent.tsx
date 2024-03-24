import React from 'react'
import HeroBlog from '@/modules/Blog/ui/HeroBlog/HeroBlog'
import BlogNavigation from '@/components/BlogNavigation/BlogNavigation'
import BlogSection from '@/modules/Blog/ui/BlogSection/BlogSection'
import useCategoryFilter from '@/hooks/useCategoryFilter'
import { blogData } from '@/modules/Blog/ui/BlogSection/data'
import Industries from '@/modules/Blog/ui/Industries/Industries'

const categories = [
  'AI',
  'Tech',
  'Self-Development',
  'UX',
  'UI Design',
  'Case Study',
  'Results',
  'News',
]

const BlogContent = () => {
  const {
    activeCategories,
    handleClick,
    isAll,
    handleAll,
    filteredBlogData,
    handleScroll,
  } = useCategoryFilter(blogData)

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
        handleScroll={handleScroll}
      />
      <BlogSection filteredBlogData={filteredBlogData} />
      <Industries title={'Industries'} />
    </main>
  )
}

export default BlogContent
