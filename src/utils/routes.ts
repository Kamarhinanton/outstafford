export default {
  public: {
    index: '/',
    about: '/about',
    blog: '/blog',
    projects: '/projects',
    contact: '/contact',
    careers: '/careers',
    privacy: '/privacy',
    terms: '/terms',
    cookies: '/cookies',
    career: (slug: string) => `/careers/${slug}`,
  },
}
