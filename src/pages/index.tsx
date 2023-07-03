import NextHead from '@/components/NextHead'
import ContentWrapper from '@/components/wrappers/ContentWrapper'
import HeroTitle from '@/sections/hero/HeroTitle'
import FeatureCards from '@/sections/features/FeatureCards'
import FeaturesGrid from '@/sections/features/FeaturesGrid'
import StickyFooter from '@/components/StickyFooter'

import {
  homeHero,
  homeFeatureGrid,
  homeFeatureCards,
  homeCaseStudiesData,
} from '@/data/homepageData'
import CtaForm from '@/sections/cta/CtaForm'
import FeaturesColumn from '@/sections/features/FeaturesColumn'
import FeaturesImage from '@/sections/features/FeaturesImage'
import FeaturesTabs from '@/sections/features/FeaturesTabs'
import FaqColumn from '@/sections/faqs/FaqColumn'
import HighlightCards from '@/sections/highlights/HighlightCards'
import FeaturesPaperGrid from '@/sections/features/FeaturesPaperGrid'
import Seperator from '@/components/Seperator'

export default function HomePage() {
  return (
    <>
      <NextHead title='Home' />
      <ContentWrapper>
        <HeroTitle />
        <FeaturesGrid {...homeFeatureGrid} />
        <Seperator />
        <FeatureCards {...homeFeatureCards} />
        <Seperator />
        <FeaturesColumn />
        <FeaturesImage gray />
        <FeaturesTabs />
        <FeaturesPaperGrid gray />
        {/* <HighlightCards /> */}
        <FaqColumn />
        <CtaForm />
      </ContentWrapper>
      <StickyFooter />
    </>
  )
}
