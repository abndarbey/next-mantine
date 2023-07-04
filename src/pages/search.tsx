import NextHead from '@/components/NextHead'
import HeroSearch from '@/sections/hero/HeroSearch'
import FeaturesImage from '@/sections/features/FeaturesImage'
import FeaturesTabs from '@/sections/features/FeaturesTabs'
import FeaturesPaperGrid from '@/sections/features/FeaturesPaperGrid'
import FaqColumn from '@/sections/faqs/FaqColumn'
import CtaForm from '@/sections/cta/CtaForm'
import FeaturesColumn from '@/sections/features/FeaturesColumn'

export default function SearchPage() {
  return (
    <>
      <NextHead title='Search' />
      <HeroSearch />
      <FeaturesColumn />
      <FeaturesImage gray />
      <FeaturesTabs />
      <FeaturesPaperGrid gray />
      <FaqColumn />
      <CtaForm />
    </>
  )
}
