import dynamic from 'next/dynamic'
import NextHead from '@/components/NextHead'

const HeroBullets = dynamic(() => import('@/sections/hero/HeroBullets'))

export default function CoverPage() {
  return (
    <>
      <NextHead title='Cover' />
      <HeroBullets />
    </>
  )
}
