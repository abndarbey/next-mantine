import { Fragment } from 'react'
import {Title, Text, Box, Divider } from '@mantine/core'
import { sectionHeaderStyles } from './styles'

type SectionHeaderProps = {
  title: string
  description?: string
  superTitle?: string
}

export default function SectionHeader(props: SectionHeaderProps) {
  const { classes } = sectionHeaderStyles()
    
  return (
    <Box pb={50}>
      {props.superTitle &&
        <Text className={classes.supTitle} align="center">
          {props.superTitle}
        </Text>
      }

      <Title order={2} className={classes.title} align="center" mt="sm">
        {props.title}
      </Title>

      {props.description &&
        <Text color="dimmed" className={classes.description} align="center" mt="md">
          {props.description}
        </Text>
      }
      <div className={classes.divider} />
      {/* <Divider size={2} color={theme.primaryColor} /> */}
    </Box>
  )
}