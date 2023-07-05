import { Container, Text, Button, Group, rem } from '@mantine/core'
import { heroTitleStyles } from './styles'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import HeroFeatures from '@/sections/hero/HeroFeatures'
import Link from 'next/link'

const description = `
  Powered by Ethereum Blockchain, the Nexport Platform provides every entity involved
  in global trade with the digital tools to share information and collaborate securely.
`

export default function HeroTitle() {
  const { classes } = heroTitleStyles()
  const router = useRouter()

  return (
    <div className={classes.wrapper}>
      <Container size='xl' className={classes.inner}>
        <h1 className={classes.title}>
          A{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'teal', to: 'cyan' }} inherit>
            Smarter
          </Text>{' '}
          way to engage in trade
        </h1>

        <Text className={classes.description}>
          {description}
        </Text>

        <HeroFeatures />
        
        <Group className={classes.controls}>
          <Button
            component={Link} href={'/search'}
            aria-label='Search'
            className={classes.control}
            size="xl"
            variant="gradient"
            gradient={{ from: 'teal', to: 'cyan' }}
            rightIcon={<IconArrowNarrowRight />}
          >
            Learn More
          </Button>

          <Button
            component={Link} href={'/contact'} 
            aria-label='Contact'  
            className={classes.control}
            size="xl"
            variant="default"
          >
            Get Started
          </Button>
        </Group>
      </Container>
    </div>
  )
}