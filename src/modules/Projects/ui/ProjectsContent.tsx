import React from 'react'
import Footer from '@/components/Footer/Footer'
import CTA from '@/components/CTA/CTA'
import BlogProjectSection from '@/modules/Projects/ui/BlogProjectSection/BlogProjectSection'
import BlogNavigation from '@/components/BlogNavigation/BlogNavigation'
import HeroProjects from '@/modules/Projects/ui/HeroSection/HeroProjects'
import useCategoryFilter from '@/hooks/useCategoryFilter'
import { ProjectPageType } from '../../../../pages/projects'
import SectionFullPage from '@/app/layouts/SectionFullPage'

const categories = ['Mobile', 'Web', 'AI']

const ProjectsContent = ({ projects }: ProjectPageType) => {
  const {
    activeCategories,
    handleClick,
    isAll,
    handleAll,
    filteredBlogData,
    handleScroll,
  } = useCategoryFilter(projects)

  return (
    <main>
      <SectionFullPage>
        <HeroProjects />
      </SectionFullPage>
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
