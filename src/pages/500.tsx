import { Fragment, ReactElement } from 'react'
import NextHead from '@/components/NextHead'
import ErrorPage, { ErrorPageProps } from '@/sections/ErrorPage'

export default function Error500() {
  return (
    <Fragment>
      <NextHead title='500' />
      <ErrorPage {...pageData} />
    </Fragment>
  )
}

Error500.getErrorLayout = function PageLayout(page: ReactElement) {
  return {page}
}

const pageData: ErrorPageProps = {
  refresh: true,
  label: 500,
  title: 'Something bad just happened...',
  description: `Our servers could not handle your request. Don't worry, our development team was already notified. Try refreshing the page.`,
}