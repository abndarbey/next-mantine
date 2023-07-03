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
      title: 'Cover',
      href: '/cover',
    },
    {
      title: 'Dashboard',
      href: '/portal',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
}