type TopbarLinkProps = {
  link: string; label: string; links?: { link: string; label: string }[]
}

export const topbarLinks: TopbarLinkProps[] = [
  {
      link: "/",
      label: "Home"
  },
  {
      link: "/about",
      label: "About"
  },
  {
      link: "/solutions",
      label: "Solutions"
  },
  {
      link: "/services",
      label: "Services"
  },
  {
      link: "/case-studies",
      label: "Case Studies"
  },
  {
      link: "/contact",
      label: "Contact"
  },
  // {
  //     link: "#1",
  //     label: "Case Studies",
  //     links: [
  //         {
  //             link: "/docs",
  //             label: "Documentation"
  //         },
  //         {
  //             link: "/resources",
  //             label: "Resources"
  //         },
  //         {
  //             link: "/community",
  //             label: "Community"
  //         },
  //         {
  //             link: "/blog",
  //             label: "Blog"
  //         }
  //     ]
  // },
  // {
  //     link: "#2",
  //     label: "Support",
  //     links: [
  //         {
  //             link: "/faq",
  //             label: "FAQ"
  //         },
  //         {
  //             link: "/demo",
  //             label: "Book a demo"
  //         },
  //         {
  //             link: "/forums",
  //             label: "Forums"
  //         }
  //     ]
  // }
]