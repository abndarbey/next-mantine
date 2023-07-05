import { Navbar, Group, Code, ScrollArea, ActionIcon } from '@mantine/core'
import { LinksGroup } from './NavbarLinksGroup'
import { nestedSidebarStyles } from './styles'
import { menuData } from './menuData'
import { IconChevronsLeft, IconLogout, IconSwitchHorizontal } from '@tabler/icons-react'
import Logo from '@/components/logos/Logo'

type NestedSidebarDarkProps = {
  width: number
  toggleSidbar: () => void
}

export default function NestedSidebarDark(props: NestedSidebarDarkProps) {
  const { classes } = nestedSidebarStyles()
  const links = menuData.map((item) => <LinksGroup {...item} key={item.label} />)

  return (
    <Navbar width={{ sm: props.width }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
          <Group position="apart">
            <Logo light />
            <ActionIcon onClick={props.toggleSidbar} size={27} className={classes.actionICon}>
              <IconChevronsLeft size={20} stroke={1.5} />
            </ActionIcon>
          </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  )
}