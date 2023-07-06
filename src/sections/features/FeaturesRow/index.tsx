import { Text, ThemeIcon, SimpleGrid } from '@mantine/core'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import { featuresRowStyles } from './styles'

interface FeaturesRowItemProps {
  title: string
  description: string
  icon: any
}

type FeaturesRowProps = {
  columns: number
  image: any
  cardData: FeaturesRowItemProps[]
}

export default function FeaturesRow(props: FeaturesRowProps) {
  const items = props.cardData.map(
    (item, index) => <FeaturesRowItem {...item} key={index} />
  )

  return (
    <SectionWrapper size="md">
      <SimpleGrid
        cols={props.columns}
        spacing={80}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
      >
        {items}
      </SimpleGrid>
    </SectionWrapper>
  )
}

function FeaturesRowItem(props: FeaturesRowItemProps) {
  const { classes, theme } = featuresRowStyles()

  return (
    <div className={classes.item}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={80} radius="md">
        {/* <Image src={props.image} alt='img' /> */}
        <props.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      </ThemeIcon>

      <div className={classes.itemWrapper}>
        <Text weight={700} size="lg" className={classes.itemTitle}>
            {props.title}
        </Text>
        <Text color="dimmed">{props.description}</Text>
      </div>
    </div>
  )
}
