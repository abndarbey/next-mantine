import {
  Header,
  Group,
  UnstyledButton,
  Text,
  ThemeIcon,
  Box,
  Burger,
  rem,
  Container,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { topbarStyles } from './styles'
import { topbarLinks } from './topbarLinks'
import Logo from '@/components/logos/Logo'
import ThemeToggler from '@/components/ThemeToggler'
import NavMenus from './NavMenus'
import DrawerMenu from './DrawerMenu'
import NavActionButtons from './NavActionButtons'

export default function TopbarMegaMenus() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const { classes, theme } = topbarStyles()

  const links = topbarLinks.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  return (
    <Box>
      <Header height={60} px="md">
        <Container size="xl" px="md" className={classes.inner}>
          <Group position="apart" sx={{ height: '100%' }}>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
              id='burger-button'
              aria-label='Burger Button'
            />
            <Logo />
            <NavMenus links={links} />
            <Group>
              <Group className={classes.hiddenMobile}>
                <NavActionButtons />
              </Group>
              <ThemeToggler />
            </Group>
          </Group>
        </Container>
      </Header>

      <DrawerMenu links={links} drawerOpened={drawerOpened} closeDrawer={closeDrawer} />
    </Box>
  )
}