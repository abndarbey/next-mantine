import { IconExternalLink } from '@tabler/icons-react'
// import { GithubIcon } from '@mantine/ds'
import {
  Title,
  Overlay,
  Group,
  Text,
  Button,
  ThemeIcon,
  SimpleGrid,
  Container,
  useMantineTheme,
  rem,
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { data } from './data'
import useStyles from './styles'

export default function HeroBanner() {
  const { classes, cx } = useStyles()
  const [, scrollTo] = useWindowScroll()
  const theme = useMantineTheme()

  const features = data.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon className={classes.featureIcon} size={44}>
        <feature.icon size={rem(24)} stroke={1.5} />
      </ThemeIcon>

      <div className={classes.featureBody}>
        <Text className={classes.featureTitle}>{feature.title}</Text>
        <Text className={classes.featureDescription}>{feature.description}</Text>
      </div>
    </div>
  ))

  return (
    <div className={classes.wrapper}>
      <Container size="xl" px="md">
        <div className={classes.image} />
        <Overlay
          gradient={`linear-gradient(45deg, ${
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
          } 25%, rgba(0, 0, 0, 0) 95%)`}
          opacity={0.5}
          zIndex={1}
        />

        <div className={classes.body}>
          <Text className={classes.supTitle}>Nexport</Text>
          <Title className={classes.title}>
            <span className={classes.highlight}>Digitizing</span>
            <br /> the global supply chain
          </Title>

          <Text className={classes.description}>
            Nexport is an open and neutral supply chain platform underpinned by blockchain technology.
            We are enabling true information sharing and collaboration across supply chains,
            thereby increasing industry innovation, reducing trade friction and ultimately promoting more global trade.
          </Text>

          <Group className={classes.controls}>
            <Button
              className={cx(classes.control, classes.controlMain)}
              onClick={() => scrollTo({ y: 700 })}
            >
              Learn More
            </Button>
            {/* <Button
              className={cx(classes.control, classes.controlSecondary)}
              leftIcon={<GithubIcon size="1rem" />}
              component="a"
              href="https://github.com/mantinedev/ui.mantine.dev"
            >
              GitHub
            </Button> */}
            <Button
              className={cx(classes.control, classes.controlSecondary)}
              rightIcon={<IconExternalLink size="1rem" stroke={1.5} />}
              component="a"
              href="https://mantine.dev/pages/getting-started/"
            >
              Get In Touch
            </Button>
          </Group>

          <SimpleGrid
            cols={3}
            spacing="xl"
            className={classes.features}
            mt={100}
            breakpoints={[{ maxWidth: 755, cols: 1, spacing: 'lg' }]}
          >
            {features}
          </SimpleGrid>
        </div>
      </Container>
    </div>
  )
}
