import { AppShell } from "@mantine/core";
import { LayoutProps } from "../layoutProps";
import GenericTopbar from "@/components/topbars/GenericTopbar";

export default function ErrorPageLayout(props: LayoutProps) {
  return (
    <AppShell
      padding={0}
      header={<GenericTopbar />}
    >
      {props.children}
    </AppShell>
  )
}
