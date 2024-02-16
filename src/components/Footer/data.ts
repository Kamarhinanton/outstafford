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
    href: routes.public.work,
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
    href: '/',
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
    href: '/',
    description: 'Join our team',
  },
  {
    href: routes.public.contact,
    description: 'Contact us',
  },
]

export const navigationFooterLinksRight = [
  {
    href: '/',
    description: 'Terms',
  },
  {
    href: '/',
    description: 'Privacy',
  },
  {
    href: '/',
    description: 'Cookies',
  },
]

export const socialLinksFooterData = [
  { href: '/', src: '/icons/logo.svg', link: 'Upwork' },
  { href: '/', src: '/icons/logo.svg', link: 'Clutch' },
  { href: '/', src: '/icons/logo.svg', link: 'G2' },
  { href: '/', src: '/icons/logo.svg', link: 'Dribbble' },
  { href: '/', src: '/icons/logo.svg', link: 'Behance' },
]
