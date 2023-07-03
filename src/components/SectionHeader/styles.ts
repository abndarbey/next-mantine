import { createStyles } from "@mantine/core"

export const sectionHeaderStyles = createStyles((theme) => ({
  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    letterSpacing: 0.5,
  },
    
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    // '&::after': {
    //   content: '""',
    //   display: 'block',
    //   backgroundColor: theme.fn.primaryColor(),
    //   width: 45,
    //   height: 2,
    //   marginTop: theme.spacing.sm,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    // },
  },

  divider: {
    content: '""',
    display: 'block',
    backgroundColor: theme.fn.primaryColor(),
    width: 45,
    height: 2,
    marginTop: theme.spacing.sm,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}))