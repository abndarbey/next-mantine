export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Nexport',
  description:
    'Connect, Trade, Track',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Search',
      href: '/search',
    },
    {
      title: 'Services',
      href: '/services',
    },
    {
      title: 'Cover',
      href: '/cover',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
    {
      title: 'Dashboard',
      href: '/portal',
    },
  ],
}