import { Box, Button, Center, Collapse, Divider, Drawer, Group, ScrollArea, UnstyledButton, rem } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import React from 'react'
import { topbarStyles } from './styles'
import { useDisclosure } from '@mantine/hooks'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import NavActionButtons from './NavActionButtons'

type DrawerMenuProps = {
  links: React.JSX.Element[]
  drawerOpened: boolean
  closeDrawer: () => void
}

export default function DrawerMenu(props: DrawerMenuProps) {
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const { classes, theme } = topbarStyles()

  const mainNav = siteConfig.mainNav.map((item: any, index: number) => {
    return (
      <Link key={index} href={item.href} className={classes.link}>
        {item.title}
      </Link>
    )
  })

  return (
    <Drawer
      opened={props.drawerOpened}
      onClose={props.closeDrawer}
      size="100%"
      padding="md"
      title="Navigation"
      className={classes.hiddenDesktop}
      zIndex={1000000}
    >
      <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
        <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
        {mainNav}
        <UnstyledButton className={classes.link} onClick={toggleLinks}>
          <Center inline>
            <Box component="span" mr={5}>
              Features
            </Box>
            <IconChevronDown size={16} color={theme.fn.primaryColor()} />
          </Center>
        </UnstyledButton>
        <Collapse in={linksOpened}>{props.links}</Collapse>
        <a href="#" className={classes.link}>
          Learn
        </a>
        <a href="#" className={classes.link}>
          Academy
        </a>

        <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

        <Group position="center" grow pb="xl" px="md">
          <NavActionButtons />
        </Group>
      </ScrollArea>
    </Drawer>
  )
}
