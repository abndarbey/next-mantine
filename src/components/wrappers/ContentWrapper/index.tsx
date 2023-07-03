import styles from './styles.module.css'
import { Paper } from '@mantine/core'
import { ReactNode } from 'react'

type ContentWrapperProps = {
  children: ReactNode
}
export default function ContentWrapper(props: ContentWrapperProps) {
  return (
    <Paper shadow='sm' className={styles.content}>
      {props.children}
    </Paper>
  )
}
