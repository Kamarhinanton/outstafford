import React, { useCallback, useMemo, useState } from 'react'
import Footer from '@/components/Footer/Footer'
import CTA from '@/components/CTA/CTA'
import BlogSection from '@/modules/Projects/ui/BlogSection/BlogSection'
import BlogNavigation from '@/modules/Projects/ui/BlogNavigation/BlogNavigation'
import { blogData } from '@/modules/Projects/ui/BlogSection/data'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import HeroProjects from '@/modules/Projects/ui/HeroSection/HeroProjects'

type CardType = {
  preview: string
  topics: string[]
  title: string
  href: string
}

export type BlogSectionType = {
  filteredBlogData?: CardType[]
  handleClick: (e: string) => void
  activeCategory: string[]
  isAll?: boolean
  handleAll?: () => void
}

const ProjectsContent = () => {
  const [activeCategories, setActiveCategories] = useState<string[]>([])
  const [isAll, setIsAll] = useState(true)
  const { width } = useWindowDimensions()

  const handleAll = useCallback(() => {
    if (!isAll) {
      setIsAll(true)
    }
    setActiveCategories([])
    scrollToContent()
  }, [isAll, width])

  const handleClick = useCallback(
    (category: string) => {
      const updatedCategories = activeCategories.includes(category)
        ? activeCategories.filter((c) => c !== category)
        : [...activeCategories, category]
      setActiveCategories(updatedCategories)
      setIsAll(false)
      if (updatedCategories.length === 0) {
        setIsAll(true)
      }
      scrollToContent()
    },
    [activeCategories, width],
  )

  const filteredBlogData = useMemo(() => {
    return blogData.filter((item) =>
      activeCategories.every((i) => item.topics.includes(i)),
    )
  }, [blogData, activeCategories])

  const scrollToContent = () => {
    if (width > breakpointMob) {
      const targetElement = document.getElementById('topBlog')
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }

  return (
    <main>
      <HeroProjects />
      <BlogNavigation
        activeCategory={activeCategories}
        handleClick={handleClick}
        isAll={isAll}
        handleAll={handleAll}
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
