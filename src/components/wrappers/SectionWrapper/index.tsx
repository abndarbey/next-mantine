import { Container, Divider, MantineNumberSize } from '@mantine/core'
import { ReactNode } from 'react'
import { sectionWarpperStyles } from './styles'

interface SectionWarpperProps {
  gray?: boolean
  size?: MantineNumberSize | undefined
  children: ReactNode
}

export default function SectionWrapper(props: SectionWarpperProps) {
  const { classes } = sectionWarpperStyles()
  let defaultSize: MantineNumberSize = 'lg'

  if (props.size) {
    defaultSize = props.size
  }

  return (
    <div className={props.gray ? classes.infoSectionWrapperGray : classes.infoSectionWrapper}>
      <Container size={defaultSize}>
        {props.children}
      </Container>
    </div>
  )
}
