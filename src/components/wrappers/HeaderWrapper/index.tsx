import { Container, MantineNumberSize } from '@mantine/core'
import { ReactNode } from 'react'
import { headerWarpperStyles } from './styles'

interface HeaderWarpperProps {
  colored?: boolean
  size?: MantineNumberSize | undefined
  children: ReactNode
}

export default function HeaderWrapper(props: HeaderWarpperProps) {
  const { classes } = headerWarpperStyles()
  let defaultSize: MantineNumberSize = 'lg'

  if (props.size) {
    defaultSize = props.size
  }

  return (
    <div className={props.colored ? classes.coloredWrapper : classes.wrapper}>
      <Container size={defaultSize}>
        {props.children}
      </Container>
    </div>
  )
}
