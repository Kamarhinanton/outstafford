import React from 'react'
import Footer from '@/components/Footer/Footer'
import BlogProjectSection from '@/modules/Projects/ui/BlogProjectSection/BlogProjectSection'
import HeroProjects from '@/modules/Projects/ui/HeroSection/HeroProjects'
import useCategoryFilter from '@/hooks/useCategoryFilter'
import dynamic from 'next/dynamic'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import { ProjectsType } from '@/utils/globalTypes'

const CTADynamic = dynamic(() => import('@/components/CTA/CTA'))

const BlogNavigation = dynamic(
  () => import('@/components/BlogNavigation/BlogNavigation'),
  {
    ssr: false,
  },
)

const ProjectsContent = ({ projects, projectTopics }: ProjectsType) => {
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
