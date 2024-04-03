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
  className?: string
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
  preview?: string
}

export type MarkdownType = {
  slug: string
  frontMatter: FrontMatterType
}

export type SingleMarkdownType = {
  content: string
  frontMatter: FrontMatterType
}

//Project types

type HeroColumns = {
  title?: string
  topics?: string[]
}

type ProjectList = {
  title: string
  description: string
}

type TeamList = {
  position: string
  name: string[]
}

export type MosaicDataType = {
  description?: {
    title?: string
    textTop?: string
    quote?: {
      text?: string
      author?: string
      position?: string
      img?: string
    }
    textBottom?: string
  }
  mosaic?: {
    topImg?: string
    bottomImg?: string
    doubleImg?: {
      img1?: string
      img2?: string
    }
  }
}

export type ProjectHero = {
  topics?: string[]
  title?: string
  columns?: HeroColumns[]
  description?: string
  preview?: string
  href?: string
}

export type ProjectChallenges = {
  title?: string
  list?: ProjectList[]
}

export type ProjectSummary = {
  title?: string
  list?: ProjectList[]
}

export type ProjectTeam = {
  title?: string
  data?: TeamList[]
}

export type ProjectType = {
  hero: ProjectHero
  challenges: ProjectChallenges
  mosaic_1: MosaicDataType
  mosaic_2: MosaicDataType
  summary: ProjectSummary
  team: ProjectTeam
}

export type SingleProjectsType = {
  frontMatter: ProjectType
}
