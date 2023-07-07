import dynamic from 'next/dynamic'
import NextHead from '@/components/NextHead'

const HeroBullets = dynamic(() => import('@/sections/hero/HeroBullets'))
const FeaturesCardImages = dynamic(() => import ('@/sections/features/FeaturesCardImages'))
import { challengesItems } from '@/data/challengesData'

export default function CoverPage() {
  return (
    <>
      <NextHead title='Cover' />
      <HeroBullets />
      <FeaturesCardImages gray {...challengesItems} />
    </>
  )
}
