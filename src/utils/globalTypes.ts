export type CardBlogType = {
  preview: string
  topics: string[]
  title: string
  href: string
  description?: string
}

export type BlogSectionType = {
  filteredBlogData?: CardBlogType[]
  handleClick?: (e: string) => void
  handleScroll?: () => void
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

export type FrontMatterType = {
  title?: string
  topics?: string[]
  salary?: string
  about?: string
  description?: string
}

export type MarkdownType = {
  slug: string
  frontMatter: FrontMatterType
}
