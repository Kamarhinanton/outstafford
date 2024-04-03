import React from 'react'
import HeroBlog from '@/modules/Blog/ui/HeroBlog/HeroBlog'
import BlogNavigation from '@/components/BlogNavigation/BlogNavigation'
import BlogSection from '@/modules/Blog/ui/BlogSection/BlogSection'
import useCategoryFilter from '@/hooks/useCategoryFilter'
import Industries from '@/modules/Blog/ui/Industries/Industries'
import { BlogType } from '../../../../pages/blog'

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

const BlogContent = ({ blog }: BlogType) => {
  const {
    activeCategories,
    handleClick,
    isAll,
    handleAll,
    filteredBlogData,
    handleScroll,
  } = useCategoryFilter(blog)

  return (
    <main className={'wrapper-class variant'}>
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
