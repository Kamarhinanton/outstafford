import React, { useCallback, useMemo, useState } from 'react'
import Footer from '@/components/Footer/Footer'
import CTA from '@/modules/Home/ui/CTA/CTA'
import HeroSection from '@/modules/Projects/ui/HeroSection/HeroSection'
import BlogSection from '@/modules/Projects/ui/BlogSection/BlogSection'
import BlogNavigation from '@/modules/Projects/ui/BlogNavigation/BlogNavigation'
import { blogData } from '@/modules/Projects/ui/BlogSection/data'

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

  const handleAll = useCallback(() => {
    if (!isAll) {
      setIsAll(true)
    }
    setActiveCategories([])
    scrollToContent()
  }, [isAll])

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
    [activeCategories],
  )

  const filteredBlogData = useMemo(() => {
    return blogData.filter((item) =>
      activeCategories.every((i) => item.topics.includes(i)),
    )
  }, [blogData, activeCategories])

  const scrollToContent = () => {
    const targetElement = document.getElementById('topBlog')
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <main>
      <HeroSection />
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
