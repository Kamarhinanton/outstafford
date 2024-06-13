import routes from '@/utils/routes'

export const navigationFooterLinksLeft = [
  {
    href: routes.public.index,
    description: 'Home',
  },
  {
    href: routes.public.about,
    description: 'About',
  },
  {
    href: routes.public.projects,
    description: 'Projects',
  },
  {
    href: `${routes.public.about}?param=work`,
    description: 'How We Work',
  },
  {
    href: routes.public.careers,
    description: 'Careers',
  },
  {
    href: routes.public.blog,
    description: 'Our Blog',
  },
  {
    href: routes.public.contact,
    description: 'Contact us',
  },
]

export const navigationFooterLinksRight = [
  {
    href: routes.public.terms,
    description: 'T&C',
  },
  {
    href: routes.public.privacy,
    description: 'Privacy Policy',
  },
  {
    href: routes.public.cookies,
    description: 'Cookies',
  },
]

export const socialLinksFooterData = [
  {
    href: 'https://www.linkedin.com/company/outstafford',
    src: '/images/linkedin_i.svg',
    link: 'Linkedin',
  },
  {
    href: 'https://t.me/outstafford',
    src: '/images/telegram_i.svg',
    link: 'Telegram',
  },
  {
    href: 'https://www.upwork.com/agencies/outstafford/',
    src: '/images/upwork_i.svg',
    link: 'Upwork',
  },
]
