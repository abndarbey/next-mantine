import {
  Header,
  Group,
  Box,
  Container,
} from '@mantine/core'
import { appbarStyles } from './styles'
import Logo from '@/components/logos/Logo'
import ThemeToggler from '@/components/ThemeToggler'

export default function GenericTopbar() {
  const { classes } = appbarStyles()

  return (
    <Box>
      <Header height={60} px="md">
        <Container size="xl" px="md" className={classes.inner}>
          <Group position="apart" sx={{ height: '100%' }}>
            <Logo />
            <ThemeToggler />
          </Group>
        </Container>
      </Header>
    </Box>
  )
}