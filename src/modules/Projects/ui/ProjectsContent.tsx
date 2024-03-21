import React from 'react'
import Footer from '@/components/Footer/Footer'
import CTA from '@/components/CTA/CTA'
import BlogSection from '@/modules/Projects/ui/BlogSection/BlogSection'
import BlogNavigation from '@/components/BlogNavigation/BlogNavigation'
import { blogData } from '@/modules/Projects/ui/BlogSection/data'
import HeroProjects from '@/modules/Projects/ui/HeroSection/HeroProjects'
import useCategoryFilter from '@/hooks/useCategoryFilter'

export type CardBlogType = {
  preview: string
  topics: string[]
  title: string
  href: string
}

export type BlogSectionType = {
  filteredBlogData?: CardBlogType[]
  handleClick?: (e: string) => void
  activeCategory?: string[]
  isAll?: boolean
  handleAll?: () => void
  categories?: string[]
  smallTopic?: boolean
}

const categories = ['Mobile', 'Web', 'AI']

const ProjectsContent = () => {
  const { activeCategories, handleClick, isAll, handleAll, filteredBlogData } =
    useCategoryFilter(blogData)

  return (
    <main>
      <HeroProjects />
      <BlogNavigation
        activeCategory={activeCategories}
        handleClick={handleClick}
        isAll={isAll}
        handleAll={handleAll}
        categories={categories}
      />
      <BlogSection
        activeCategory={activeCategories}
        handleClick={handleClick}
        filteredBlogData={filteredBlogData}
      />
      <CTA />
      <Footer />
    </main>
  )
}

export default ProjectsContent
