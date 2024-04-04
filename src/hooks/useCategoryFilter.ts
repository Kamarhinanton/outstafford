import { useCallback, useMemo, useState } from 'react'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import { CardBlogType } from '@/utils/globalTypes'
import { useLenis } from '@studio-freight/react-lenis'

const useCategoryFilter = (data: CardBlogType[]) => {
  const [activeCategories, setActiveCategories] = useState<string[]>([])
  const [isAll, setIsAll] = useState(true)
  const { width } = useWindowDimensions()
  const lenis = useLenis()

  const handleAll = useCallback(() => {
    if (!isAll) {
      setIsAll(true)
    }
    setActiveCategories([])
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
    },
    [activeCategories, width],
  )

  const filteredBlogData = useMemo(() => {
    return data.filter((item) =>
      activeCategories.every((i) => item.topics.includes(i)),
    )
  }, [data, activeCategories])

  const handleScroll = () => {
    const targetElement = document.getElementById('topBlog')
    const isMobile = width > breakpointMob ? 0 : -120
    if (targetElement) {
      lenis?.scrollTo(targetElement, {
        duration: 1.5,
        force: true,
        offset: isMobile,
        lock: true,
      })
    }
  }
  return {
    activeCategories,
    handleClick,
    isAll,
    handleAll,
    filteredBlogData,
    handleScroll,
  }
}

export default useCategoryFilter
