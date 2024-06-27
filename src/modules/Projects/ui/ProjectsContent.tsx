import React from 'react'
import Footer from '@/components/Footer/Footer'
import BlogProjectSection from '@/modules/Projects/ui/BlogProjectSection/BlogProjectSection'
import BlogNavigation from '@/components/BlogNavigation/BlogNavigation'
import HeroProjects from '@/modules/Projects/ui/HeroSection/HeroProjects'
import useCategoryFilter from '@/hooks/useCategoryFilter'
import { ProjectPageType } from '../../../../pages/projects'
import dynamic from 'next/dynamic'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'

const CTADynamic = dynamic(() => import('@/components/CTA/CTA'))

const ProjectsContent = ({ projects, projectTopics }: ProjectPageType) => {
  const desktopCategories = projectTopics
    .slice(0, 3)
    .map((topic) => topic.topic)
  const otherCategories = projectTopics.slice(3).map((topic) => topic.topic)
  const mobileCategories = projectTopics.map((topic) => topic.topic)
  const { width } = useWindowDimensions()
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
      <HeroProjects />
      <BlogNavigation
        activeCategory={activeCategories}
        handleClick={handleClick}
        isAll={isAll}
        handleAll={handleAll}
        smallTopic={width <= breakpointMob}
        categories={
          width <= breakpointMob ? mobileCategories : desktopCategories
        }
        handleScroll={handleScroll}
      />
      <BlogProjectSection
        activeCategory={activeCategories}
        handleClick={handleClick}
        filteredBlogData={filteredBlogData}
        handleScroll={handleScroll}
        categories={otherCategories}
      />
      <CTADynamic />
      <Footer />
    </main>
  )
}

export default ProjectsContent
