import { useRouter } from "next/router"
import { featureCardsStyles } from "./styles"
import { Card, Text } from "@mantine/core"
import { FeatureProps } from "@/types/types"


function CardWithInternalLink(props: FeatureProps) {
  const { classes, theme } = featureCardsStyles()
  const router = useRouter()

  return (
    <Card shadow="md" radius="md" className={classes.card} p="xl">
      <props.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text
        size="lg" weight={500} mt="md"
        className={classes.cardTitle}
        onClick={(e: any) => router.push(props.link!)}
      >
        {props.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {props.description}
      </Text>
    </Card>
  )
}

export default function FeatureCardItem(props: FeatureProps) {
  const { classes } = featureCardsStyles()
  if (props.externalLink) {
    return (
      <a
        className={classes.link}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardWithInternalLink {...props} />
      </a>
    )
  } else {
    return (
      <CardWithInternalLink {...props} />
    )
  }
}