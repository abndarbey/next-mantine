import { ReactElement } from 'react'
import dynamic from 'next/dynamic'
import NextHead from '@/components/NextHead'

const Login = dynamic(() => import('@/modules/auth/Login'))

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
