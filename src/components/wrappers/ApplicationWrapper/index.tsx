import { Box } from '@mantine/core'
import React, { ReactNode } from 'react'
import { applicationWarpperStyles } from './styles'

type ApplicationWrapperProps = {
    children: ReactNode
}

export default function ApplicationWrapper(props: ApplicationWrapperProps) {
  const { classes } = applicationWarpperStyles()
  return (
    <Box className={classes.wrapper}>
      {props.children}
    </Box>
  )
}
