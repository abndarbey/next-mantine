import React, { ReactNode } from 'react'
import { highlightSectionWarpperStyles } from './styles'
import { Container } from '@mantine/core'

type HighlightSectionWrapperProps = {
  children: ReactNode
}

export default function HighlightSectionWrapper(props: HighlightSectionWrapperProps) {
  const { classes } = highlightSectionWarpperStyles()

  return (
    <div className={classes.wrapper}>
      <Container size='lg'>
        {props.children}
      </Container>
    </div>
  )
}
