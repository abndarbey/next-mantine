import { LayoutProps } from '../layoutProps'
import { AppShell } from '@mantine/core'
import Sidebar from '@/components/Sidebar'
import Appbar from '@/components/topbars/Appbar'
import ApplicationWrapper from '@/components/wrappers/ApplicationWrapper'

export default function AdminPageLayout(props: LayoutProps) {
  return (
    <AppShell
      padding={0}
      layout='alt'
      navbar={<Sidebar width={250} />}
      header={<Appbar height={60} />}
    >
      <ApplicationWrapper>
        {props.children}
      </ApplicationWrapper>
    </AppShell>
  )
}
