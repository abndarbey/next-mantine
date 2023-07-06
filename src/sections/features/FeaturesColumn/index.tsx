import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Container } from '@mantine/core'
import { featuresColumnStyles } from './styles'
import { features } from './data'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import { gradientRadial } from '@/styles/constants'

type FeaturesColumnProps = {
  gray?: boolean
}

export default function FeaturesColumn(props: FeaturesColumnProps) {
  const { classes } = featuresColumnStyles()

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={gradientRadial}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ))

  return (
    <SectionWrapper gray={props.gray}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
              Why work with Slackbear?
          </Title>
          <Text color="dimmed">
              We work as a unit. Engineering, design, and project management under one roof.
          </Text>

          <Button
              variant="gradient"
              gradient={gradientRadial}
              size="lg"
              mt="xl"
          >
              Get started
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </SectionWrapper>
  )
}