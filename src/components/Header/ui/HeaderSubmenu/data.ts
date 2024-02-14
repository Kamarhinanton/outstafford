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
      { link: 'Projects', href: '/' },
    ],
  },
  {
    description: 'Get to know us',
    links: [
      { link: 'Our team', href: '/' },
      { link: 'How we work', href: '/' },
      { link: 'Reviews', href: '/' },
      { link: 'Our blog', href: '/' },
      { link: 'Careers', href: '/' },
    ],
  },
  {
    description: 'Links',
    links: [
      { href: '/', src: '/icons/icon.png', link: 'Upwork' },
      { href: '/', src: '/icons/icon.png', link: 'Clutch' },
      { href: '/', src: '/icons/icon.png', link: 'G2' },
    ],
  },
  {
    description: 'Find us on social media',
    links: [
      { href: '/', src: '/icons/icon.png', link: 'Dribbble' },
      { href: '/', src: '/icons/icon.png', link: 'Behance' },
      { href: '/', src: '/icons/icon.png', link: 'Instagram' },
    ],
  },
]
