import { AspectRatio, Button, Paper, SimpleGrid, Text } from '@mantine/core'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import SectionHeader from '@/components/SectionHeader'
import { mockdata } from './data'
import { useStyles } from './styles'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import NextImage from '@/components/NextImage'

export default function HighlightCardsGrid() {
  const { classes } = useStyles()

  const cards = mockdata.map((article, index) => (
    <div key={index}>
      <Paper key={article.title} radius="xs" component="a" href="#" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
          <NextImage src={article.image} alt='img' />
        </AspectRatio>
      </Paper>
      <Text size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
      <Button
        my='md'
        variant='subtle'
        rightIcon={<IconArrowNarrowRight />}
      >
        Learn More
      </Button>
    </div>
  ))

  return (
    <SectionWrapper>
      <SectionHeader
        title='Discover how Nexport solutions can work for you'
      />
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </SectionWrapper>
  )
}
