import {
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Container,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { heroBulletStyles } from './styles'

import bannerImage from '@/assets/images/hero-banner.svg'
import NextImage from '@/components/NextImage'
import HeroWrapper from '@/components/wrappers/HeroWrapper'

export default function HeroBullets() {
  const { classes } = heroBulletStyles()
  return (
    <HeroWrapper>
      <Container size='lg' className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> React <br /> components library
          </Title>
          <Text color="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={rem(12)} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all components and hooks
              export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
              any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
              keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
        <div  className={classes.image}>
          <NextImage src={bannerImage.src} alt='img' />
        </div>
      </Container>
    </HeroWrapper>
  )
}