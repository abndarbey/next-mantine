import { gradientRadial } from "@/styles/constants"
import { FeatureProps } from "@/types/types"
import { Text, ThemeIcon, useMantineTheme } from "@mantine/core"

export function FeatureGridItem({ icon: Icon, title, description }: FeatureProps) {
  const theme = useMantineTheme()
  return (
    <div>
      <ThemeIcon
        size={50} radius={50}
        variant="gradient"
        gradient={gradientRadial}
      >
        <Icon size={30} stroke={2} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  )
}