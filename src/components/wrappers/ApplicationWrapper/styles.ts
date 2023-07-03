import { createStyles } from "@mantine/core"

export const applicationWarpperStyles = createStyles((theme) => ({
  wrapper: {
    // height: '100%',
    // width: '100%',
    padding: 20,
    margin: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1]
  },
}))