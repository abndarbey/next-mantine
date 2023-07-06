import { Container, Text, Box } from '@mantine/core'
import { heroSearchStyles } from './styles'
import SearchBar from '@/components/SearchBar'
import { useTypewriter } from 'react-simple-typewriter'
import HeroFeatures from '../HeroFeatures'
import { gradientLiner } from '@/styles/constants'
import HeroWrapper from '@/components/wrappers/HeroWrapper'

export default function HeroSearch() {
  const { classes } = heroSearchStyles()
  const [text] = useTypewriter({
    words: ['Partners', '3PLs', 'Warehouses'],
    loop: true,
  })

  return (
    <HeroWrapper>
      <Container size='xl' className={classes.inner}>
        <h1 className={classes.title}>
          Search{' '}
          <Text component="span" variant="gradient" gradient={gradientLiner} inherit>
            {text}
          </Text>
          {/* import Cursor for react-simple-typewriter */}
          {/* <Cursor /> */}
        </h1>
        
        <SearchBar size='xl' />
        <Box pt={30}>
          <HeroFeatures />
        </Box>
      </Container>
    </HeroWrapper>
  )
}
