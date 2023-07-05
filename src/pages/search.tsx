import dynamic from 'next/dynamic'
import NextHead from '@/components/NextHead'

const HeroSearch = dynamic(() => import('@/sections/hero/HeroSearch'))
const FeaturesColumn = dynamic(() => import('@/sections/features/FeaturesColumn'))
const FeaturesImage = dynamic(() => import('@/sections/features/FeaturesImage'))
const FeaturesTabs = dynamic(() => import('@/sections/features/FeaturesTabs'))
const FaqColumn = dynamic(() => import('@/sections/faqs/FaqColumn'))
const FeaturesPaperGrid = dynamic(() => import('@/sections/features/FeaturesPaperGrid'))
const CtaForm = dynamic(() => import('@/sections/cta/CtaForm'))

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
