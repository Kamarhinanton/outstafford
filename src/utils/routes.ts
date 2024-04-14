export default {
  public: {
    index: '/',
    about: '/about',
    blog: '/blog',
    projects: '/projects',
    work: '/work',
    contact: '/contact',
    careers: '/careers',
    privacy: '/privacy',
    terms: '/terms',
    cookies: '/cookies',
    career: (slug: string) => `/careers/${slug}`,
  },
}
