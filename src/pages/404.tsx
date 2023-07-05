import { Fragment, ReactElement } from 'react'
import dynamic from 'next/dynamic'
import NextHead from '@/components/NextHead'
import { ErrorPageProps } from '@/sections/ErrorPage'

const ErrorPage = dynamic(() => import('@/sections/ErrorPage'))

export default function Error404() {
  return (
    <Fragment>
      <NextHead title='404' />
      <ErrorPage {...pageData} />
    </Fragment>
  )
}

Error404.getErrorLayout = function PageLayout(page: ReactElement) {
  return {page}
}

const pageData: ErrorPageProps = {
  label: 404,
  title: 'You have found a secret place.',
  description: `Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.`
}