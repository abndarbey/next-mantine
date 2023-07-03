import {
    ThemeIcon,
    Text,
    SimpleGrid,
    useMantineTheme,
} from '@mantine/core'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import SectionHeader from '@/components/SectionHeader'
import { FeatureProps } from '@/types/types'
import { featuresGridStyles } from './styles'

function Feature({ icon: Icon, title, description }: FeatureProps) {
    const theme = useMantineTheme()
    return (
        <div>
            <ThemeIcon variant="light" size={50} radius={40}>
                <Icon size={30} stroke={2} />
            </ThemeIcon>
            <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{title}</Text>
            <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
                {description}
            </Text>
        </div>
    )
}

type FeaturesGridProps = {
    gray?: boolean
    columns: number
    title: string
    description?: string
    superTitle?: string
    data?: FeatureProps[]
}

export default function FeaturesGrid(props: FeaturesGridProps) {
    const { theme } = featuresGridStyles()
    const features = props.data?.map((item, index) => <Feature {...item} key={index} />);

    return (
        <SectionWrapper gray={props.gray}>
            <SectionHeader superTitle={props.superTitle} title={props.title} description={props.description} />
            <SimpleGrid
                cols={props.columns}
                spacing={`calc(${theme.spacing.xl} * 2)`}
                breakpoints={[
                    { maxWidth: 980, cols: 2, spacing: 'xl' },
                    { maxWidth: 755, cols: 1, spacing: 'xl' },
                ]}
            >
                {features}
            </SimpleGrid>
        </SectionWrapper>
    )
}