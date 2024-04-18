import routes from '@/utils/routes'

export const navigationFooterLinksLeft = [
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

export const navigationFooterLinksLeftMob = [
  {
    href: routes.public.projects,
    description: 'Projects & Case studies',
  },
  {
    href: '/',
    description: 'Mobile App Development',
  },
  {
    href: '/',
    description: 'AI integrations',
  },
  {
    href: '/',
    description: 'Web Development',
  },
  {
    href: routes.public.careers,
    description: 'Join our team',
  },
  {
    href: routes.public.contact,
    description: 'Contact us',
  },
]

export const navigationFooterLinksRight = [
  {
    href: routes.public.terms,
    description: 'Terms',
  },
  {
    href: routes.public.privacy,
    description: 'Privacy',
  },
  {
    href: routes.public.cookies,
    description: 'Cookies',
  },
]

export const socialLinksFooterData = [
  {
    href: 'https://www.linkedin.com/company/outstafford',
    src: '/images/linkid.png',
    link: 'Linkedin',
  },
  {
    href: 'https://dribbble.com/outstafford',
    src: '/images/dribble.png',
    link: 'Dribble',
  },
  {
    href: 'https://t.me/outstafford',
    src: '/images/telegram.png',
    link: 'Telegram',
  },
]
