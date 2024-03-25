export default {
  public: {
    index: '/',
    about: '/about',
    blog: '/blog',
    projects: '/projects',
    work: '/work',
    contact: '/contact',
    careers: '/careers',
    career: (slug: string) => `/careers/${slug}`,
  },
}
