import React from 'react'
import HeroBlog from '@/modules/Blog/ui/HeroBlog/HeroBlog'
import BlogNavigation from '@/components/BlogNavigation/BlogNavigation'
import BlogSection from '@/modules/Blog/ui/BlogSection/BlogSection'
import useCategoryFilter from '@/hooks/useCategoryFilter'
import dynamic from 'next/dynamic'
import Footer from '@/components/Footer/Footer'
import { BlogsType } from '@/utils/globalTypes'

const IndustriesDynamic = dynamic(
  () => import('@/components/Industries/Industries'),
)

const BlogContent = ({ blogs, filterTopics }: BlogsType) => {
  const {
    activeCategories,
    handleClick,
    isAll,
    handleAll,
    filteredBlogData,
    handleScroll,
  } = useCategoryFilter(blogs)

  return (
    <main>
      <HeroBlog />
      <BlogNavigation
        activeCategory={activeCategories}
        handleClick={handleClick}
        isAll={isAll}
        handleAll={handleAll}
        categories={filterTopics}
        smallTopic={true}
        handleScroll={handleScroll}
      />
      <BlogSection filteredBlogData={filteredBlogData} />
      <IndustriesDynamic title={'Industries'} />
      <Footer />
    </main>
  )
}

export default BlogContent
