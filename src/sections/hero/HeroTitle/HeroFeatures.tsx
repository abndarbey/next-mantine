import { Text, SimpleGrid, Container, rem } from '@mantine/core'
import { IconTruck, IconCertificate, IconCoin, IconLink, IconFile, IconFileAnalytics, IconTrack, IconLocation } from '@tabler/icons-react'
import { heroFeatureStyles } from './styles'

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>
  title: string
  description: string
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = heroFeatureStyles()

  return (
    <div className={cx(classes.feature, className)} {...others}>
      {/* <div className={classes.overlay} /> */}

      <div className={classes.content}>
        <Icon size={rem(38)} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>
          {description}
        </Text>
      </div>
    </div>
  )
}

export default function HeroFeatures() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />)

  return (
    <SimpleGrid
      cols={3}
      mt={30} mb={60}
      breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
    >
      {items}
    </SimpleGrid>
  )
}

const mockdata = [
  {
    icon: IconLink,
    title: 'Connect',
    description: `
    Maximize collaboration as our solution empowers partners, fostering efficient communication and enhancing operations.
    `,
  },
  {
    icon: IconFileAnalytics,
    title: 'Trade',
    description: `
    Streamline processes with our secure solution, facilitating efficient transactions for seamless business and competitive advantage.
    `,
  },
  {
    icon: IconLocation,
    title: 'Track',
    description: `
    Gain real-time visibility, control shipments, and orders for proactive decision-making and improved satisfaction.
    `
  },
]
