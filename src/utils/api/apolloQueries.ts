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

export const PROJECT_PATH = gql`
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
