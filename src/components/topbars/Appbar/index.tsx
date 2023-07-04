import { Header, Group, Burger } from '@mantine/core'
import ThemeToggler from '@/components/ThemeToggler'

type AppbarProps = {
  height: number
}

export default function Appbar(props: AppbarProps) {
  return (
    <Header height={props.height} px="md">
      <Group position="right" sx={{ height: '100%' }}>
        <ThemeToggler />
      </Group>
    </Header>
  )
}