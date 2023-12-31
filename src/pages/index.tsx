import dynamic from 'next/dynamic'
import NextHead from '@/components/NextHead'

const HeroTitle = dynamic(() => import('@/sections/hero/HeroTitle'))
const FeatureCards = dynamic(() => import('@/sections/features/FeatureCards'))
const FeaturesGrid = dynamic(() => import('@/sections/features/FeaturesGrid'))
const FeaturesColumn = dynamic(() => import('@/sections/features/FeaturesColumn'))
const FeaturesImage = dynamic(() => import('@/sections/features/FeaturesImage'))
const FeaturesTabs = dynamic(() => import('@/sections/features/FeaturesTabs'))
const FaqColumn = dynamic(() => import('@/sections/faqs/FaqColumn'))
const FeaturesPaperGrid = dynamic(() => import('@/sections/features/FeaturesPaperGrid'))
const FeaturesCardImages = dynamic(() => import ('@/sections/features/FeaturesCardImages'))
const CtaForm = dynamic(() => import('@/sections/cta/CtaForm'))
const Seperator = dynamic(() => import('@/components/Seperator'))

import {
  homeFeatureGrid,
  homeFeatureCards,
  homeCaseStudiesData,
} from '@/data/homepageData'

import { challengesItems } from '@/data/challengesData'

export default function HomePage() {
  return (
    <>
      <NextHead title='Home' />
      <HeroTitle />
      <FeaturesGrid {...homeFeatureGrid} />
      <Seperator />
      <FeatureCards {...homeFeatureCards} />
      <FeaturesColumn gray />
      <FeaturesCardImages {...challengesItems} />
      <FeaturesImage gray />
      <FeaturesTabs />
      <FeaturesPaperGrid gray {...homeCaseStudiesData} />
      <FaqColumn />
      <CtaForm />
    </>
  )
}
