import { createStyles } from "@mantine/core"

export const highlightSectionWarpperStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    backgroundImage: `linear-gradient(60deg, ${theme.colors.teal[7]} 0%, ${
      theme.colors.cyan[7]
    } 100%)`,
    // backgroundImage: `radial-gradient(${theme.colors.teal[7]} 0%, ${
    //   theme.colors.cyan[7]
    // } 100%)`,
    color: theme.white,
  },
}))