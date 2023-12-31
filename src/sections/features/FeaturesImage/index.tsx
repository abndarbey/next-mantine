import {
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { featuresImageStylesStyles } from './styles'

import bannerImage from '@/assets/images/hero-banner.svg'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import NextImage from '@/components/NextImage'
import { gradientLiner } from '@/styles/constants'

type FeaturesImageProps = {
  gray?: boolean
}

export default function FeaturesImage(props: FeaturesImageProps) {
  const { classes } = featuresImageStylesStyles()
  return (
    <SectionWrapper gray={props.gray}>
      <div className={classes.inner}>
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
            <Button
              className={classes.control}
              size="md"
              variant='gradient'
              gradient={gradientLiner}
            >
              Get started
            </Button>
            <Button variant="default" size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
        <div className={classes.image}>
          <NextImage src={bannerImage.src} alt='img' />
        </div>
      </div>
    </SectionWrapper>
  )
}