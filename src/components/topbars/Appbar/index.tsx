import {
  Header,
  Group,
} from '@mantine/core'
import { appbarStyles } from './styles'
import ThemeToggler from '@/components/ThemeToggler'

type AppbarProps = {
  height: number
}

export default function Appbar(props: AppbarProps) {
  const { classes } = appbarStyles()

  return (
    <Header height={props.height} px="md" className={classes.inner}>
      <Group position="right" sx={{ height: '100%' }}>
        <ThemeToggler />
      </Group>
    </Header>
  )
}