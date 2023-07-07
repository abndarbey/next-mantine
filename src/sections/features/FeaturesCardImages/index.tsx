import { SimpleGrid } from '@mantine/core'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import SectionHeader from '@/components/SectionHeader'
import { FeatureProps } from '@/types/types'
import FeatureCardImageItem from './FeatureCardImageItem'

interface FeaturesCardImagesProps {
  gray?: boolean
  columns: number
  superTitle?: string
  title: string
  description?: string
  cardData: FeatureProps[]
}

export default function FeaturesCardImages(props: FeaturesCardImagesProps) {
  const featureCards = props.cardData.map((item, key) => (
    <FeatureCardImageItem key={key} {...item} />
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
        breakpoints={[{ maxWidth: 'md', cols: 2 }, { maxWidth: 'sm', cols: 1 }]}
      >
        {featureCards}
      </SimpleGrid>
    </SectionWrapper>
  )
}
