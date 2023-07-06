import { SimpleGrid } from '@mantine/core'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import SectionHeader from '@/components/SectionHeader'
import { FeatureProps } from '@/types/types'
import { FeatureGridCard } from './FeatureGridCard'
import { featuresGridStyles } from './styles'

type FeaturesGridProps = {
  gray?: boolean
  columns: number
  title: string
  description?: string
  superTitle?: string
  data?: FeatureProps[]
}

export default function FeaturesGrid(props: FeaturesGridProps) {
  const { theme } = featuresGridStyles()
  const features = props.data?.map((item, index) => <FeatureGridCard {...item} key={index} />);

  return (
    <SectionWrapper gray={props.gray}>
      <SectionHeader superTitle={props.superTitle} title={props.title} description={props.description} />
      <SimpleGrid
        cols={props.columns}
        spacing={`calc(${theme.spacing.xl} * 2)`}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </SectionWrapper>
  )
}
