import { Image, Accordion, Grid, Col, Title, Text, List, ThemeIcon, rem } from '@mantine/core'
import { StaticImageData } from 'next/image'
import SectionWrapper from '@/components/wrappers/SectionWrapper';
import { tabContentStyles } from './tabContentStyles';
import { IconCheck } from '@tabler/icons-react';

const placeholder = `
It can’t help but hear a pin drop from over half a mile away,
so it lives deep in the mountains where there aren’t many people or Pokémon.
`

type FeaturesTabContentProps = {
    gray?: boolean
    image: StaticImageData
}

export default function FeaturesTabContent(props: FeaturesTabContentProps) {
  const { classes } = tabContentStyles()
  return (
    <div className={classes.wrapper}>
      <Grid id="faq-grid" gutter={50} grow>
        <Col span={12} md={6}>
          <Image src={props.image.src} alt="Frequently Asked Questions" />
        </Col>
        <Col span={12} md={6}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A modern React components library
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
          </div>
        </Col>
      </Grid>
    </div>
  )
}
