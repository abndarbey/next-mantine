import { gradientRadial } from '@/styles/constants'
import { Text, ThemeIcon } from '@mantine/core'

type FeatureColumnItemProps = {
  title: string
  description: string
  icon: any
}

export default function FeatureColumnItem(props: FeatureColumnItemProps) {
  return (
    <div key={props.title}>
      <ThemeIcon
        size={50}
        radius={50}
        variant="gradient"
        gradient={gradientRadial}
      >
        <props.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {props.title}
      </Text>
      <Text color="dimmed" size="sm">
        {props.description}
      </Text>
    </div>
  )
}
