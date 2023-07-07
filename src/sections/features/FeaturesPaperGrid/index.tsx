import { SimpleGrid } from '@mantine/core'
import SectionHeader from '@/components/SectionHeader'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import FeaturePaperGridItem from './FeaturePaperGridItem'
import { ArticleCardProps } from '@/types/types'

type FeaturesPaperGridProps = {
  gray?: boolean
  columns: number
  cardLimit: number
  showSectionHeader?: {
    superTitle?: string
    title: string
    description: string
  }
  showDescription?: boolean
  cardData: ArticleCardProps[]
}

export default function FeaturesPaperGrid(props: FeaturesPaperGridProps) {
  const cards = props.cardData?.map(
    (item, index) => <FeaturePaperGridItem {...item} key={index} />
  )

  return (
    <SectionWrapper gray={props.gray}>
      <SectionHeader
        title='Discover how Nexport solutions can work for you'
      />
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'md', cols: 2 }, { maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </SectionWrapper>
  )
}
