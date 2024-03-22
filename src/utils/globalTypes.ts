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

export type FormData = {
  interestGroup: string[]
  email: string
  message: string
  name: string
  budgetGroup: string[]
  document: FileList | undefined
}
