import { LayoutProps } from '../layoutProps'
import { AppShell } from '@mantine/core'
import Sidebar from '@/components/Sidebar'
import Appbar from '@/components/topbars/Appbar'

export default function AdminPageLayout(props: LayoutProps) {
  return (
    <AppShell
      padding={20}
      layout='alt'
      navbar={<Sidebar width={250} />}
      header={<Appbar height={60} />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1] },
      })}
    >
      {props.children}
    </AppShell>
  )
}
