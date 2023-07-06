import { createStyles } from "@mantine/core"

export const headerWarpperStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray [0],
  },

  coloredWrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    backgroundColor: theme.colors.teal,
    color: theme.white
  },
}))