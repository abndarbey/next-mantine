import { Text } from '@mantine/core'

export default function Copyright() {
  return (
    <Text color="dimmed" size="sm">
      &copy; {(new Date().getFullYear())} Slackbear Communications. All Rights Reserved.
    </Text>
  )
}
