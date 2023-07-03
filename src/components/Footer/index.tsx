import { Text, Container, ActionIcon, Group, Box } from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'
import Logo from '@/components/logos/Logo'
import { footerLinks } from './footerLinks'
import { footerStyles } from './styles'
import Copyright from '@/components/Copyright'

// type FooterProps = {
//   data: {
//     title: string
//     links: { label: string link: string }[]
//   }[]
// }

export default function Footer() {
  const { classes } = footerStyles()

  const groups = footerLinks.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  return (
    <Box className={classes.footer}>
      <Container size="xl" px="md" className={classes.inner}>
        <div className={classes.logo}>
          <Logo width={200} />
          <Text size="sm" color="dimmed" className={classes.description}>
            Connect, Trade, Track
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container size="xl" px="md" className={classes.afterFooter}>
        <Copyright />

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Box>
  )
}