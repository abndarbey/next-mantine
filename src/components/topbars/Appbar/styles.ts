import { createStyles, rem } from "@mantine/styles"

export const appbarStyles = createStyles((theme) => ({
  inner: {
    height: 60,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))
