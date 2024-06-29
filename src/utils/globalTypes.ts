import { BlocksContent } from '@strapi/blocks-react-renderer'

export type CardBlogType = {
  preview: string
  topics: string[]
  title: string
  href: string
  description?: string
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
type SingleProjectPathType = {
  id: string
}

export type QueryResultProjectPathType = {
  projects: {
    data: SingleProjectPathType[]
  }
}

export type QueryResultProjectType = {
  project: {
    data: ProjectType
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

export type ProjectType = {
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

export type ProjectsType = {
  projects: CardBlogType[]
  projectTopics: {
    id: string
    topic: string
  }[]
}

export type QueryResultProjectsType = {
  projects: {
    data: ResponseProjectType[]
  }
  projectTopics: {
    data: TopicType[]
  }
}

type ResponseProjectType = {
  id: string
  attributes: {
    hero: {
      title: string
    }
    project_topics: {
      data: TopicType[]
    }
    preview: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}

//Blog types
export type BlogsType = {
  blogs: BlogsTransformType[]
  filterTopics: string[]
}

export type QueryResultBlogsType = {
  blogs: {
    data: SingleBlogsType[]
  }
  blogTopics: {
    data: TopicType[]
  }
}

type SingleBlogsType = {
  id: string
  attributes: {
    title: string
    blog_topics: {
      data: TopicType[]
    }
    preview: ImageUrlType
  }
}

type BlogsTransformType = {
  href: string
  title: string
  preview: string
  topics: string[]
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

export type SingleBlogResultType = {
  blog: {
    href: string
    title: string
    preview: string
    description: string | null
    editor: BlocksContent
    topics: string[]
  }
}

type SingleBlogPathType = {
  id: string
}

export type QueryResultBlogPathType = {
  blogs: {
    data: SingleBlogPathType[]
  }
}

type SingleBlogType = {
  id: string
  attributes: {
    title: string
    description: string | null
    editor: BlocksContent
    preview: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    topics: {
      data: TopicType[]
    }
  }
}

export type QueryResultBlogType = {
  blog: {
    data: SingleBlogType
  }
}

// Careers
type CareersTransformType = {
  id: string | number
  title: string
  topics: string[]
}

export type TopicType = {
  id: string
  attributes: {
    topic: string
  }
}

type SingleCareersType = {
  id: string
  attributes: {
    title: string
    topics: {
      data: TopicType[]
    }
  }
}

export type QueryResultCareersType = {
  positions: {
    data: SingleCareersType[]
  }
}

export type CareersType = {
  careers: CareersTransformType[]
}

export type SingleCareerResultType = {
  career: {
    id: string
    title: string
    salary: string
    about: string
    description: string | null
    editor: BlocksContent
    topics: string[]
  }
}

type SingleCareerPathType = {
  id: string
}

export type QueryResultCareerPathType = {
  positions: {
    data: SingleCareerPathType[]
  }
}

type SingleCareerType = {
  id: string
  attributes: {
    title: string
    salary: string
    about: string
    description: string | null
    editor: BlocksContent
    topics: {
      data: TopicType[]
    }
  }
}

export type QueryResultCareerType = {
  position: {
    data: SingleCareerType
  }
}
