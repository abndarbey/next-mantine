import styles from './styles.module.css'
import { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import Appbar from '@/components/topbars/Appbar'
import ApplicationWrapper from '@/components/wrappers/ApplicationWrapper'

type AdminPageLayoutProps = {
  children: ReactNode
}

export default function AdminPageLayout(props: AdminPageLayoutProps) {

  // return (
  //   <div className={styles.container}>
  //       <aside className={styles.sidebar}>
  //         <Sidebar width={250} />
  //       </aside>
  //       <nav className={styles.topbar}>
  //         <Appbar />
  //       </nav>
  //       <div className={styles.content}>
  //         <ApplicationWrapper>
  //           {props.children}
  //         </ApplicationWrapper>
  //       </div>
  //   </div>
  // )

  return (
    <main className={styles.container}>
      <aside className={styles.sidebar}>
        <Sidebar width={250}  />
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
