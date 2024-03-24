import React from 'react'
import Footer from '@/components/Footer/Footer'
import CTA from '@/components/CTA/CTA'
import BlogProjectSection from '@/modules/Projects/ui/BlogProjectSection/BlogProjectSection'
import BlogNavigation from '@/components/BlogNavigation/BlogNavigation'
import { blogProjectData } from '@/modules/Projects/ui/BlogProjectSection/data'
import HeroProjects from '@/modules/Projects/ui/HeroSection/HeroProjects'
import useCategoryFilter from '@/hooks/useCategoryFilter'

const categories = ['Mobile', 'Web', 'AI']

const ProjectsContent = () => {
  const {
    activeCategories,
    handleClick,
    isAll,
    handleAll,
    filteredBlogData,
    handleScroll,
  } = useCategoryFilter(blogProjectData)

  return (
    <main>
      <HeroProjects />
      <BlogNavigation
        activeCategory={activeCategories}
        handleClick={handleClick}
        isAll={isAll}
        handleAll={handleAll}
        categories={categories}
        handleScroll={handleScroll}
      />
      <BlogProjectSection
        activeCategory={activeCategories}
        handleClick={handleClick}
        filteredBlogData={filteredBlogData}
        handleScroll={handleScroll}
      />
      <CTA />
      <Footer />
    </main>
  )
}

export default ProjectsContent
