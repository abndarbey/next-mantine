import styles from './styles.module.css'
import { ReactNode } from 'react'
import TopbarMegaMenus from '@/components/topbars/TopbarMegaMenus'

type LandingPageLayoutProps = {
  children: ReactNode
}

export default function LandingPageLayout(props: LandingPageLayoutProps) {
  return (
    <div className={styles.container}>
      <nav className={styles.topbar}>
        <TopbarMegaMenus />
      </nav>
      <main className={styles.main}>
        {props.children}
      </main>
    </div>
  )
}
