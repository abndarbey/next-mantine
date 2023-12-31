import { createStyles, getStylesRef, rem } from "@mantine/styles"

export const nestedSidebarStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.dark[6],
    paddingBottom: 0,
  },

  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md}  * 1.5)`,
    borderBottom: `1px solid ${theme.colors.dark[4]}`,
  },

  actionICon: {
    color: theme.colors.dark[0],
    '&:hover': {
      color: theme.colors.dark[0],
      backgroundColor: theme.colors.dark[5],
    },
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colors.dark[1],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors.dark[6],
      color: theme.white,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.white,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colors.dark[2],
    marginRight: theme.spacing.sm,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.colors.dark[4]}`,
  },
}))

export const navbarLinkStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colors.dark[0],
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: theme.colors.dark[7],
      color: theme.white,
    },
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: rem(31),
    marginLeft: rem(30),
    fontSize: theme.fontSizes.sm,
    color: theme.colors.dark[0],
    borderLeft: `${rem(1)} solid ${theme.colors.dark[4]}`,

    '&:hover': {
      backgroundColor: theme.colors.dark[7],
      color: theme.white,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}))