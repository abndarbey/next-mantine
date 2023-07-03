import { Anchor, Box, Button, Center, Divider, Group, HoverCard, SimpleGrid, Text } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
import { topbarStyles } from './styles'

type NavMenuProps = {
  links: React.JSX.Element[]
}

export default function NavMenus(props: NavMenuProps) {
  const { classes, theme } = topbarStyles()
  const pathName = usePathname()
  
  const mainNav = siteConfig.mainNav.map((item: any, index: number) => {
    const isActive = pathName === item.href
    return (
      <Link key={index} href={item.href} className={isActive ? classes.activeLink : classes.link}>
        {item.title}
      </Link>
    )
  })

  return (
    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
      {mainNav}
      <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
        <HoverCard.Target>
          <a href="#" className={classes.link}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </a>
        </HoverCard.Target>

        <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
          <Group position="apart" px="md">
            <Text fw={500}>Features</Text>
            <Anchor href="#" fz="xs">
              View all
            </Anchor>
          </Group>

          <Divider
            my="sm"
            mx="-md"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <SimpleGrid cols={2} spacing={0}>
            {props.links}
          </SimpleGrid>

          <div className={classes.dropdownFooter}>
            <Group position="apart">
              <div>
                <Text fw={500} fz="sm">
                  Get started
                </Text>
                <Text size="xs" color="dimmed">
                  Their food sources have decreased, and their numbers
                </Text>
              </div>
              <Button variant="default">Get started</Button>
            </Group>
          </div>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  )
}
