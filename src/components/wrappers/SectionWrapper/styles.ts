import { createStyles } from "@mantine/core"

export const sectionWarpperStyles = createStyles((theme) => ({
  infoSectionWrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  infoSectionWrapperGray: {
    position: 'relative',
    boxSizing: 'border-box',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] // theme.white,
  },
}))