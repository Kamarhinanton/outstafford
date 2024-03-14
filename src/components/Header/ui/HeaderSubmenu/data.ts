import routes from '@/utils/routes'

type CustomLink = {
  href: string
  src?: string
  link: string
}

type Submenu = {
  description: string
  links: CustomLink[]
}

type HeaderSubmenuData = Submenu[]

export const headerSubmenuData: HeaderSubmenuData = [
  {
    description: 'Our work',
    links: [
      { link: 'Main', href: '/' },
      { link: 'About', href: '/' },
      { link: 'Projects', href: routes.public.projects },
    ],
  },
  {
    description: 'Get to know us',
    links: [
      { link: 'Our team', href: '/' },
      { link: 'How we work', href: '/' },
      { link: 'Reviews', href: '/' },
      { link: 'Our blog', href: routes.public.blog },
      { link: 'Careers', href: routes.public.careers },
    ],
  },
  {
    description: 'Links',
    links: [
      { href: '/', src: '/icons/logo.svg', link: 'Upwork' },
      { href: '/', src: '/icons/logo.svg', link: 'Clutch' },
      { href: '/', src: '/icons/logo.svg', link: 'G2' },
    ],
  },
  {
    description: 'Find us on social media',
    links: [
      { href: '/', src: '/icons/logo.svg', link: 'Dribbble' },
      { href: '/', src: '/icons/logo.svg', link: 'Behance' },
      { href: '/', src: '/icons/logo.svg', link: 'Instagram' },
    ],
  },
]
