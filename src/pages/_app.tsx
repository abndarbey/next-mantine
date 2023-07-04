import '@/styles/globals.css'
import GlobalTheme from '@/styles/GlobalTheme'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import {
  LandingPageLayout,
  AdminPageLayout,
  AuthPageLayout,
  ErrorPageLayout,
} from '@/layouts'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getAuthLayout?: (page: ReactElement) => ReactNode
  getAdminLayout?: (page: ReactElement) => ReactNode
  getErrorLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props

  return (
    <>
      <GlobalTheme>
        {
          Component.getAuthLayout ? <AuthPageLayout><Component {...pageProps} /></AuthPageLayout> :
          Component.getAdminLayout ? <AdminPageLayout><Component {...pageProps} /></AdminPageLayout> :
          Component.getErrorLayout ? <ErrorPageLayout><Component {...pageProps} /></ErrorPageLayout> :
          <LandingPageLayout>
            <Component {...pageProps} />
          </LandingPageLayout>
        }
      </GlobalTheme>
    </>
  )
}
