import { LayoutProps } from "../layoutProps"
import { AppShell } from "@mantine/core"
import GenericTopbar from "@/components/topbars/GenericTopbar"

export default function AuthPageLayout(props: LayoutProps) {
  return (
    <AppShell
      padding={0}
      header={<GenericTopbar />}
    >
      {props.children}
    </AppShell>
  )
}
