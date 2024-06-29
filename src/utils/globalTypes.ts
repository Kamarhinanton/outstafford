import { TopicType } from '../../pages/careers'

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
  interestGroup?: string[]
  email: string
  message?: string
  name: string
  budgetGroup?: string[]
  document: File | undefined
  formType: string
}

//Project types
type OneProjectPathType = {
  id: string
}

export type QueryResultPathType = {
  projects: {
    data: OneProjectPathType[]
  }
}

export type QueryResultProjectType = {
  project: {
    data: OneProjectType
  }
}

export type ImageUrlType = {
  data: {
    attributes: {
      url: string | null
    }
  }
}

type TechnologiesProjectType = {
  title: string
}

export type HeroProjectType = {
  title: string
  description: string
  preview: ImageUrlType
  link: string
}

export type HeroColumnsProjectType = {
  title: string
  topic: TechnologiesProjectType[]
}

export type ChallengesProjectType = {
  title: string
  list: ChallengesListType[]
}

type ChallengesListType = {
  title: string
  description: string
}

export type ProjectMosaicType = {
  id: string
  title: string | null
  textTop: string | null
  quote: {
    text: string
    author: string
    position: string
    img: ImageUrlType | null
  } | null
  textBottom: string | null
  topImg: ImageUrlType | null
  doubleImg: {
    img1: ImageUrlType
    img2: ImageUrlType
  } | null
  bottomImg: ImageUrlType | null
}

export type SummaryProjectType = {
  title: string
  list: {
    id: string
    title: string | null
    description: string | null
    picture: ImageUrlType | null
  }[]
}

export type TeamProjectType = {
  id: string
  position: string
  name: TeamListType[]
}

type TeamListType = {
  id: string
  title: string
}

export type OneProjectType = {
  id: string
  attributes: {
    project_topics: {
      data: TopicType[]
    }
    hero: HeroProjectType
    hero_columns: HeroColumnsProjectType[]
    challenges: ChallengesProjectType
    mosaic: ProjectMosaicType[]
    summary: SummaryProjectType
    team_title: {
      title: string
    } | null
    team: TeamProjectType[]
  }
}
