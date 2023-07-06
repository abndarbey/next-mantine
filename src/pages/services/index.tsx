import dynamic from 'next/dynamic'
import NextHead from '@/components/NextHead'

const FeatureCards = dynamic(() => import('@/sections/features/FeatureCards'))
const FaqColumn = dynamic(() => import('@/sections/faqs/FaqColumn'))
const CtaForm = dynamic(() => import('@/sections/cta/CtaForm'))


import { serviceHeader, serviceFeatureCards } from '@/data/servicepage'
import HeaderWithImage from '@/sections/headers/HeaderWithImage'

export default function ServicesPage() {
  return (
    <>
      <NextHead title='Services' />
      <HeaderWithImage {...serviceHeader} />
      <FeatureCards {...serviceFeatureCards} />
      <FaqColumn />
      <CtaForm />
    </>
  )
}
