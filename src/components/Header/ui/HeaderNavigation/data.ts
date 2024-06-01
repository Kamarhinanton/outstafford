import routes from '@/utils/routes'

export const navigationHeaderLinks = [
  {
    href: routes.public.index,
    description: 'Home',
    desktop: false,
  },
  {
    href: routes.public.about,
    description: 'About',
    desktop: true,
  },
  {
    href: routes.public.projects,
    description: 'Projects',
    desktop: true,
  },
  {
    href: `${routes.public.about}?param=work`,
    description: 'How We Work',
    desktop: true,
  },
  {
    href: routes.public.careers,
    description: 'Careers',
    desktop: false,
  },
  {
    href: routes.public.blog,
    description: 'Our Blog',
    desktop: true,
  },
  {
    href: routes.public.contact,
    description: 'Contact Us',
    desktop: false,
  },
]
