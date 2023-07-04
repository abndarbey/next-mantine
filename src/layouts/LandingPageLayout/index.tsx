import styles from './styles.module.css'
import { AppShell } from '@mantine/core'
import TopbarMegaMenus from '@/components/topbars/TopbarMegaMenus'
import Footer from '@/components/Footer'
import { LayoutProps } from '../layoutProps'

export default function LandingPageLayout(props: LayoutProps) {
  return (
    <AppShell
      padding={0}
      header={<TopbarMegaMenus />}
      footer={<Footer />}
    >
      {props.children}
    </AppShell>
  )
}

// export default function LandingPageLayout(props: LandingPageLayoutProps) {
//   return (
//     <div className={styles.container}>
//       <nav className={styles.topbar}>
//         <TopbarMegaMenus />
//       </nav>
//       <main className={styles.main}>
//         {props.children}
//       </main>
//     </div>
//   )
// }
