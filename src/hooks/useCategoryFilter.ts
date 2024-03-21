import { useCallback, useMemo, useState } from 'react'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import { CardBlogType } from '@/modules/Projects/ui/ProjectsContent'

const useCategoryFilter = (data: CardBlogType[]) => {
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
    return data.filter((item) =>
      activeCategories.every((i) => item.topics.includes(i)),
    )
  }, [data, activeCategories])

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
  return {
    activeCategories,
    handleClick,
    isAll,
    handleAll,
    filteredBlogData,
  }
}

export default useCategoryFilter
