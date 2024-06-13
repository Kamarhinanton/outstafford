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
      { link: 'Home', href: routes.public.index },
      { link: 'About', href: routes.public.about },
      { link: 'Projects', href: routes.public.projects },
    ],
  },
  {
    description: 'Get to know us',
    links: [
      { link: 'How we work', href: `${routes.public.about}?param=work` },
      { link: 'Reviews', href: routes.public.index },
      { link: 'Our blog', href: routes.public.blog },
      { link: 'Careers', href: routes.public.careers },
    ],
  },
  {
    description: 'Links',
    links: [
      {
        href: 'https://www.upwork.com/agencies/outstafford/',
        src: '/images/upwork_i.svg',
        link: 'Upwork',
      },
      {
        href: 'https://www.linkedin.com/company/outstafford',
        src: '/images/linkedin_i.svg',
        link: 'LinkedIn',
      },
    ],
  },
  {
    description: 'Contacts',
    links: [
      {
        href: 'mailto:hey@outstafford.com',
        src: '/images/email_i.svg',
        link: 'Send email',
      },
      {
        href: 'https://t.me/outstafford',
        src: '/images/telegram_i.svg',
        link: 'Telegram',
      },
      {
        href: 'https://calendly.com/outstafford/30-min-intro-meeting',
        src: '/images/calendly_i.svg',
        link: 'Book a meeting',
      },
    ],
  },
]
