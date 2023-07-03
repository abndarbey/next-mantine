import styles from './styles.module.css'
import { ReactNode } from 'react'
import GenericTopbar from '@/components/topbars/GenericTopbar'

type AuthPageLayoutProps = {
  children: ReactNode
}

export default function AuthPageLayout(props: AuthPageLayoutProps) {
  return (
    <>
      <nav className={styles.topbar}>
        <GenericTopbar />
      </nav>
      <main className={styles.content}>
        {props.children}
      </main>
    </>
  )
}
