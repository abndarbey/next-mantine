import { SimpleGrid } from '@mantine/core'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import SectionHeader from '@/components/SectionHeader'
import { FeatureProps } from '@/types/types'
import FeatureCardItem from './FeatureCardItem'

interface FeatureCardProps {
  gray?: boolean
  columns: number
  superTitle?: string
  title: string
  description?: string
  cardData: FeatureProps[]
}

export default function FeatureCards(props: FeatureCardProps) {
  const featureCards = props.cardData.map((item, key) => (
    <FeatureCardItem key={key} {...item} />
  ))
    
  return (
    <SectionWrapper gray={props.gray}>
      <SectionHeader
        superTitle={props.superTitle}
        title={props.title}
        description={props.description}
      />
      <SimpleGrid
        cols={props.columns}
        spacing="xl"
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {featureCards}
      </SimpleGrid>
    </SectionWrapper>
  )
}
