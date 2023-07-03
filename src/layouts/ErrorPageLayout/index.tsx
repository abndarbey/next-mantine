import styles from './styles.module.css'
import { ReactNode } from 'react'
import GenericTopbar from '@/components/topbars/GenericTopbar'

type ErrorPageLayoutProps = {
  children: ReactNode
}

export default function ErrorPageLayout(props: ErrorPageLayoutProps) {
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
