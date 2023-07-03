import { useRouter } from 'next/router'
import { Text, Card, SimpleGrid } from '@mantine/core'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import SectionHeader from '@/components/SectionHeader'
import { featureCardsStyles } from './styles'
import { FeatureProps } from '@/types/types'

interface FeatureCardProps {
    gray?: boolean
    columns: number
    superTitle?: string
    title: string
    description?: string
    cardData: FeatureProps[]
}

export default function FeatureCards(props: FeatureCardProps) {
    const featureCards = props.cardData.map((item, key) => (
        <FeatureCard key={key} {...item} />
    ))
    
    return (
        <SectionWrapper gray={props.gray}>
            <SectionHeader
                superTitle={props.superTitle}
                title={props.title}
                description={props.description}
            />
            <SimpleGrid
                cols={props.columns}
                spacing="xl"
                breakpoints={[{ maxWidth: 'md', cols: 1 }]}
            >
                {featureCards}
            </SimpleGrid>
        </SectionWrapper>
    )
}

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

function FeatureCard(props: FeatureProps) {
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