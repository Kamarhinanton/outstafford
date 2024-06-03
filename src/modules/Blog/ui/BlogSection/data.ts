import routes from '@/utils/routes'

export const blogData = [
  {
    preview: '/images/Projects/ZO/ZO.jpg',
    topics: ['Mobile', 'Social media'],
    title: 'ZÔ',
    href: `${routes.public.project('zo')}`,
  },
  {
    preview: '/images/Projects/MyAI/myai.jpg',
    topics: ['Mobile', 'AI'],
    title: 'MyAI',
    href: `${routes.public.project('myai')}`,
  },
  {
    preview: '/images/Projects/Checkem/case_preview.jpg',
    topics: ['Mobile', 'Web', 'Healthcare'],
    title: 'Checkem',
    href: `${routes.public.project('checkem')}`,
  },
  {
    preview: '/images/Projects/Camber/Camber.jpg',
    topics: ['Mobile', 'Location-based'],
    title: 'Camber',
    href: `${routes.public.project('camber')}`,
  },
  {
    preview: '/images/Projects/Skylist/Skylist.jpg',
    topics: ['Mobile', 'Web', 'E-Commerce'],
    title: 'Skylist',
    href: `${routes.public.project('skylist')}`,
  },
]
