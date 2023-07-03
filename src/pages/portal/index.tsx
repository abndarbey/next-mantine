import { Fragment, ReactElement } from 'react'
import NextHead from '@/components/NextHead'
import { Dashboard } from '@/modules/Dashboard'

export default function DashboardPage() {
  return (
    <Fragment>
      <NextHead title='Dashboard' />
      <Dashboard />
    </Fragment>
  )
}

DashboardPage.getAdminLayout = function PageLayout(page: ReactElement) {
  return {page}
}
