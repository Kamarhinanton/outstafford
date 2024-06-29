import { gql } from '@apollo/client'

export const PROJECTS_PATH = gql`
  query {
    projects {
      data {
        id
      }
    }
  }
`

export const PROJECT_SINGLE = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      data {
        id
        attributes {
          project_topics {
            data {
              id
              attributes {
                topic
              }
            }
          }
          hero {
            title
            description
            preview {
              data {
                attributes {
                  url
                }
              }
            }
            link
          }
          hero_columns {
            ... on ComponentProjectInnerHeroColumn {
              title
              topic {
                title
              }
            }
          }
          challenges {
            title
            list {
              title
              description
            }
          }
          mosaic {
            id
            title
            textTop
            quote {
              text
              author
              position
              img {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            textBottom
            topImg {
              data {
                attributes {
                  url
                }
              }
            }
            doubleImg {
              img1 {
                data {
                  attributes {
                    url
                  }
                }
              }
              img2 {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            bottomImg {
              data {
                attributes {
                  url
                }
              }
            }
          }
          summary {
            title
            list {
              id
              title
              description
              picture {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          team_title {
            title
          }
          team {
            ... on ComponentProjectInnerOurTeam {
              id
              position
              name {
                id
                title
              }
            }
          }
        }
      }
    }
  }
`

export const PROJECTS_ALL = gql`
  query {
    projectTopics {
      data {
        id
        attributes {
          topic
        }
      }
    }
    projects {
      data {
        id
        attributes {
          hero {
            title
          }
          preview {
            data {
              attributes {
                url
              }
            }
          }
          project_topics {
            data {
              attributes {
                topic
              }
            }
          }
        }
      }
    }
  }
`

export const BLOGS_ALL = gql`
  query {
    blogTopics {
      data {
        id
        attributes {
          topic
        }
      }
    }
    blogs {
      data {
        id
        attributes {
          title
          blog_topics {
            data {
              id
              attributes {
                topic
              }
            }
          }
          preview {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const BLOGS_PATH = gql`
  query {
    blogs {
      data {
        id
      }
    }
  }
`

export const BLOG_SINGLE = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
      data {
        id
        attributes {
          title
          description
          editor
          topics: blog_topics {
            data {
              id
              attributes {
                topic
              }
            }
          }
          preview {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const CAREERS_ALL = gql`
  query {
    positions {
      data {
        id
        attributes {
          title
          topics: position_topics {
            data {
              id
              attributes {
                topic
              }
            }
          }
        }
      }
    }
  }
`

export const CAREERS_PATH = gql`
  query {
    positions {
      data {
        id
      }
    }
  }
`

export const CAREER_SINGLE = gql`
  query GetCareer($id: ID!) {
    position(id: $id) {
      data {
        id
        attributes {
          title
          salary
          about
          description
          editor
          topics: position_topics {
            data {
              id
              attributes {
                topic
              }
            }
          }
        }
      }
    }
  }
`
