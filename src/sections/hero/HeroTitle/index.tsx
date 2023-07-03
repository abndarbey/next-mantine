import { Container, Text, Button, Group, rem } from '@mantine/core'
import { GithubIcon } from '@mantine/ds'
import { heroTitleStyles } from './styles'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import HeroFeatures from './HeroFeatures'

const description = `
  Powered by Ethereum Blockchain, the Nexport Platform provides every entity involved
  in global trade with the digital tools to share information and collaborate securely.
`

export default function HeroTitle() {
  const { classes } = heroTitleStyles()
  const router = useRouter()

  const handleClick = () => {
    router.push('/contact')
  }

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
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'teal', to: 'cyan' }}
            rightIcon={<IconArrowNarrowRight />}
            onClick={handleClick}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  )
}