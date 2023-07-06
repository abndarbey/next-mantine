import NextHead from '@/components/NextHead'
import { useRouter } from 'next/router'
import HeaderWithImage from '@/sections/headers/HeaderWithImage'
import CtaForm from '@/sections/cta/CtaForm'
import PageLoader from '@/components/PageLoader'

import {
  engineeringService,
  productDesignService,
  projectManagementService,
  staffAugmentationService,
  testingService,
  trainingService,
} from '@/data/servicesData'
import Error404 from '@/pages/404'
import FeaturesRow from '@/sections/features/FeaturesRow'

export default function Services() {
  const { query, isReady } = useRouter()
  if (!isReady) return <PageLoader />

  const code: any = query.code
  const title: string = code + ' ' + 'Service'

  let headerData: any = {}
  if (code === 'engineering') {
    headerData = engineeringService
  }
  else if (code === 'product-design') {
    headerData = productDesignService
  }
  else if (code === 'project-management') {
    headerData = projectManagementService
  }
  else if (code === 'staff-augmentation') {
    headerData = staffAugmentationService
  }
  else if (code === 'testing') {
    headerData = testingService
  }
  else if (code === 'training') {
    headerData = trainingService
  } else {
    return <Error404 />
  }
    
  return (
    <>
      <NextHead title={title} />
      <HeaderWithImage {...headerData} />
      <FeaturesRow {...headerData} />
      {/* <FeaturesCards {...serviceFeatureCards} /> */}
      <CtaForm />
    </>
  )
}