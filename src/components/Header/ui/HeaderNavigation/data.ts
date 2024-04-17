import routes from '@/utils/routes'

export const navigationHeaderLinks = [
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
    href: routes.public.blog,
    description: 'Our Blog',
  },
]
