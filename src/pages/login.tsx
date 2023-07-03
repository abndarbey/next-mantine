import NextHead from '@/components/NextHead'
import Login from '@/modules/auth/Login'
import { ReactElement } from 'react'

export default function LoginPage() {
  return (
    <>
      <NextHead title='Login' />
      <Login />
    </>
  )
}

LoginPage.getErrorLayout = function PageLayout(page: ReactElement) {
    return {page}
  }
