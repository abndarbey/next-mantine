import { createStyles, rem } from "@mantine/styles"

export const heroFeatureStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,

    [theme.fn.smallerThan('sm')]: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
  },

  overlay: {
    position: 'absolute',
    height: rem(100),
    width: rem(160),
    top: 0,
    left: 0,
    // backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(16),
    color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[7],
  },
}))
