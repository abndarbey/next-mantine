import { SimpleGrid } from '@mantine/core'
import SectionHeader from '@/components/SectionHeader'
import { mockdata } from './data'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import FeaturePaperGridCard from './FeaturePaperGridCard'

type FeaturesPaperGridProps = {
  gray?: boolean
}

export default function FeaturesPaperGrid(props: FeaturesPaperGridProps) {
  const cards = mockdata?.map(
    (item, index) => <FeaturePaperGridCard {...item} key={index} />
  )

  return (
    <SectionWrapper gray={props.gray}>
      <SectionHeader
        title='Discover how Nexport solutions can work for you'
      />
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </SectionWrapper>
  )
}
