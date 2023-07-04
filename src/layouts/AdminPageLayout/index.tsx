import styles from './styles.module.css'
import { LayoutProps } from '../layoutProps'
import { AppShell } from '@mantine/core'
import Sidebar from '@/components/Sidebar'
import Appbar from '@/components/topbars/Appbar'
import ApplicationWrapper from '@/components/wrappers/ApplicationWrapper'

// export default function AdminPageLayout(props: LayoutProps) {
//   return (
//     <AppShell
//       padding={0}
//       navbar={<Sidebar width={250} />}
//       header={<Appbar height={60} />}
//     >
//       <ApplicationWrapper>
//         {props.children}
//       </ApplicationWrapper>
//     </AppShell>
//   )
// }

export default function AdminPageLayout(props: LayoutProps) {
  return (
    <main className={styles.container}>
      <aside className={styles.sidebar}>
        <Sidebar width={250} height={'100%'}  />
      </aside>
      <nav className={styles.topbar}>
        <Appbar height={60} />
      </nav>
      <div className={styles.content}>
        <ApplicationWrapper>{props.children}</ApplicationWrapper>
      </div>
    </main>
  )
}
